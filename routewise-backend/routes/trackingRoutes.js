router.post("/update", async (req, res) => {
  const { event_id, latitude, longitude } = req.body;

  await pool.query(
    "INSERT INTO tracking_logs(event_id,latitude,longitude) VALUES($1,$2,$3)",
    [event_id, latitude, longitude],
  );

  res.json({ message: "Location updated" });
});
