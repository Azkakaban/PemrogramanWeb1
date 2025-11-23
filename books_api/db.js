const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
});

pool
  .connect()
  .then(async (client) => {
    console.log("✅ Connected to PostgreSQL");

    await client.query(`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100),
        author VARCHAR(100),
        publish_date DATE,
        publisher VARCHAR(100)
      );
    `);

    console.log("✅ Table 'books' checked/created");

    client.release();
  })
  .catch((err) => console.error("❌ Database connection error:", err.stack));

module.exports = pool;