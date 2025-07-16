/** biome-ignore-all lint/suspicious/noConsole: <explanation> */
import { GoogleGenAI } from '@google/genai';
import { env } from '../env.ts';

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

const geminiModel = 'gemini-2.5-flash';

const embedderModel = 'text-embedding-004';

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await gemini.models.generateContent({
    model: geminiModel,
    contents: [
      {
        text: 'Transcreva o áudio para Português do Brasil. Seja preciso e natural na transcrição. Mantenha a pontuação adequada e divida o texto em parágrafos quando for apropriado.',
      },
      {
        inlineData: {
          mimeType,
          data: audioAsBase64,
        },
      },
    ],
  });

  if (!response.text) {
    throw new Error('Failed to transcribe audio.');
  }

  return response.text;
}

export async function generateEmbeddings(transcription: string) {
  const TASK_TYPE = 'RETRIEVAL_DOCUMENT';

  const response = await gemini.models.embedContent({
    model: embedderModel,
    contents: [transcription],
    config: {
      taskType: TASK_TYPE,
    },
  });

  if (!response.embeddings?.[0].values) {
    throw new Error('Failed to generate embeddings.');
  }

  return response.embeddings[0].values;
}

export async function generateAnswer(
  question: string,
  transcriptions: string[]
) {
  const context = transcriptions.join('\n\n');

  const prompt = `
  Com base no texto fornecido abaixo como contexto, responda à pergunta de forma clara e precisa em Português do Brasil (PT-BR).

  CONTEXTO:
  ${context}

  PERGUNTA:
  ${question}

  INSTRUÇÕES:
    // - Use informações contidas no contexto enviado para responder à pergunta;
    - Se a resposta não for encontrada no contexto, responda que não possui informações suficientes para responder à pergunta;
    - Seja objetivo;
    - Mantenha um tom educativo e profissional;
    - Cite trechos relevantes do contexto, se apropriado.
    - Se for citar o contexto, use como: conteúdo da gravação, utilizando-o como referência para a resposta.
  `.trim();

  const response = await gemini.models.generateContent({
    model: geminiModel,
    contents: [
      {
        text: prompt,
      },
    ],
  });

  if (!response.text) {
    throw new Error('Failed to generate answer.');
  }

  return response.text;
}
