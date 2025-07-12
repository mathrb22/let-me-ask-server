import { reset, seed } from 'drizzle-seed';

import { db, sql } from './connection.ts';

import { schema } from './schema/index.ts';

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
        createdAt: f.date({
          // min date: 3 weeks ago from today's date
          minDate: new Date(Date.now() - 3 * 7 * 24 * 60 * 60 * 1000),
          maxDate: new Date(),
        }),
      },
    },
    questions: {
      count: 20,
      columns: {
        question: f.loremIpsum(),
        answer: f.loremIpsum(),
        createdAt: f.date({
          maxDate: new Date(),
        }),
      },
    },
  };
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log('Database seeded successfully.');
