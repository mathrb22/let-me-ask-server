import { count, eq } from 'drizzle-orm';
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import z from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const getRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    '/rooms/:roomId',
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;

      const results = await db
        .select({
          id: schema.rooms.id,
          name: schema.rooms.name,
          description: schema.rooms.description,
          createdAt: schema.rooms.createdAt,
          questionCount: count(schema.questions.id),
        })
        .from(schema.rooms)
        .where(eq(schema.rooms.id, roomId))
        .leftJoin(
          schema.questions,
          eq(schema.questions.roomId, schema.rooms.id)
        )
        .groupBy(schema.rooms.id);

      const room = results[0];

      if (!room) {
        return reply.status(404).send({
          error: 'Room not found',
        });
      }

      return room;
    }
  );
};
