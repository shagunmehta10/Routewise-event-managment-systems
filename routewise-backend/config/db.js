const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "routewise",
  password: "Shagun@10",
  port: 5432,
});

module.exports = pool;
