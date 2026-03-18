const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.post("/register", async (req, res) => {
  console.log(req.body); // 👈 ADD THIS LINE

  const { name, address, service_road_available, internal_route } = req.body;

  const result = await pool.query(
    "INSERT INTO venues(name,address,service_road_available,internal_route) VALUES($1,$2,$3,$4) RETURNING *",
    [name, address, service_road_available, internal_route],
  );

  res.json(result.rows[0]);
});

module.exports = router;
