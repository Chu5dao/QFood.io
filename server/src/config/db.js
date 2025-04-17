const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');
const url = require('url');

const createDbConnection = () => {
  try {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth ? params.auth.split(':') : [];

    const config = {
      user: auth[0] || '',
      password: auth[1] || null, // Use null if password is not provided
      host: params.hostname || '',
      port: params.port || '',
      database: params.pathname ? params.pathname.split('/')[1] : '',
      ssl: false
    };

    console.log('Database connection config:', JSON.stringify({ ...config, password: config.password ? '[REDACTED]' : 'null' }, null, 2));

    const pool = new Pool(config);
    const db = drizzle(pool);
    return { db, pool };
  } catch (error) {
    console.error('Error creating database connection:', error);
    throw error;
  }
};

module.exports = createDbConnection;