import { and, desc, eq, ilike, or } from 'drizzle-orm';
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import z from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    '/rooms/:roomId/questions',
    {
      schema: {
        tags: ['Questions'],
        summary: 'Get room questions with optional search',
        params: z.object({
          roomId: z.string(),
        }),
        querystring: z.object({
          search: z.string().optional(),
        }),
      },
    },
    async (request) => {
      const { roomId } = request.params;
      const { search } = request.query;

      // Decode URL if needed and validate
      const decodedSearch = search ? decodeURIComponent(search).trim() : '';

      const result = await db
        .select({
          id: schema.questions.id,
          question: schema.questions.question,
          answer: schema.questions.answer,
          createdAt: schema.questions.createdAt,
        })
        .from(schema.questions)
        .where(
          decodedSearch
            ? and(
                eq(schema.questions.roomId, roomId),
                or(
                  ilike(schema.questions.question, `%${decodedSearch}%`),
                  ilike(schema.questions.answer, `%${decodedSearch}%`)
                )
              )
            : eq(schema.questions.roomId, roomId)
        )
        .orderBy(desc(schema.questions.createdAt));

      return result;
    }
  );
};
