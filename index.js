const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/projects", async (req, res) => {
  const result = await pool.query("SELECT * FROM projects");
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log("Server running");
});
