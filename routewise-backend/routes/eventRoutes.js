const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Get all events
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Create new event
router.post("/", async (req, res) => {
  const { name, description, date, startLocation, endLocation, status } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO events (name, description, date, "startLocation", "endLocation", status)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, description, date, startLocation, endLocation, status || 'upcoming']
    );
    res.json({ success: true, message: "Event created successfully", data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
