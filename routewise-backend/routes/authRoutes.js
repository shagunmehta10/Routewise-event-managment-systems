const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await pool.query(
    "INSERT INTO users(name,email,password,role) VALUES($1,$2,$3,$4) RETURNING *",
    [name, email, hashedPassword, role],
  );

  res.json(user.rows[0]);
});

module.exports = router;
