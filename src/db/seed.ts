import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { schema } from './schema/index.ts';

const { rooms, questions } = schema;

const simpleSchema = { rooms, questions };

await reset(db, simpleSchema);

await seed(db, simpleSchema).refine(f => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
        createdAt: f.date({ maxDate: new Date() }),
      },
      questions: {
        count: 20,
      }
    }
  }
})

await sql.end();
// biome-ignore lint/suspicious/noConsole: This is a seed script, console logging is acceptable here.
console.log('Database reset and seeded successfully.');