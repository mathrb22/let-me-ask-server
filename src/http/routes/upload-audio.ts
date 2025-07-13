/** biome-ignore-all lint/suspicious/noConsole: <explanation> */
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';
import { generateEmbeddings, transcribeAudio } from '../../services/gemini.ts';

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/audio',
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;

      //Get the audio file as a multipart file stream
      const audio = await request.file();
      // Node.js always work with streams, so we need to convert the audio file to a buffer

      if (!audio) {
        throw new Error('Audio is required.');
      }

      // await toBuffer = wait for the stream to finish and convert it to a buffer - a temporary storage space in memory
      const audioBuffer = await audio.toBuffer();

      // Convert the audio buffer result to a base64 string
      const audioAsBase64 = audioBuffer.toString('base64');

      // 1. Transcribe the audio file
      // 2. Generate semantic vectors/embeddings from the transcription
      // 3. Store the vectors and transcription in the database

      const transcription = await transcribeAudio(
        audioAsBase64,
        audio.mimetype
      );

      const embeddings = await generateEmbeddings(transcription);

      const result = await db
        .insert(schema.audioChunks)
        .values({
          roomId,
          transcription,
          embeddings,
        })
        .returning();

      const chunk = result[0];

      if (!chunk) {
        throw new Error('Failed to upload audio chunk.');
      }

      reply.status(201).send({
        transcription,
        embeddings,
      });
    }
  );
};
