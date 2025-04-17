require('dotenv').config();
const { drizzle } = require('drizzle-orm/node-postgres');
const { migrate } = require('drizzle-orm/node-postgres/migrator');
const { Pool } = require('pg');
const schema = require('../models/foods');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

const db = drizzle(pool, { schema });

async function runMigration() {
  console.log('Running migration...');
  await migrate(db, { migrationsFolder: './drizzle' });
  console.log('Migration complete');
  await pool.end();
}

runMigration().catch(console.error);