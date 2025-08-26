import 'dotenv/config';
import { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({
    path: '.env.local',
});


export default {
  out: './server/migrations',
  schema: './server/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
