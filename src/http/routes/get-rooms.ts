import { count, desc, eq, ilike, or } from 'drizzle-orm';
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import z from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    '/rooms',
    {
      schema: {
        tags: ['Rooms'],
        summary: 'Get rooms with optional search',
        querystring: z.object({
          search: z.string().optional(),
        }),
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              description: z.string().nullable(),
              createdAt: z.date(),
              questionsCount: z.number(),
            })
          ),
        },
      },
    },
    async (request) => {
      const { search } = request.query;

      // Decode URL if needed and validate
      const decodedSearch = search ? decodeURIComponent(search).trim() : '';

      const results = await db
        .select({
          id: schema.rooms.id,
          name: schema.rooms.name,
          description: schema.rooms.description,
          createdAt: schema.rooms.createdAt,
          questionsCount: count(schema.questions.id),
        })
        .from(schema.rooms)
        .leftJoin(
          schema.questions,
          eq(schema.questions.roomId, schema.rooms.id)
        )
        .where(
          decodedSearch
            ? or(
                ilike(schema.rooms.name, `%${decodedSearch}%`),
                ilike(schema.rooms.description, `%${decodedSearch}%`)
              )
            : undefined
        )
        .groupBy(schema.rooms.id)
        .orderBy(desc(schema.rooms.createdAt));

      return results;
    }
  );
};
