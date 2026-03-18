const db = require("../config/db");

// 1️⃣ Route validation function
const validateRoute = (routeGeoJSON) => {
  let usesMainRoad = false;

  routeGeoJSON.features.forEach((segment) => {
    if (segment.properties.road_type === "main") {
      usesMainRoad = true;
    }
  });

  return !usesMainRoad;
};

// 2️⃣ Create Event Controller
exports.createEvent = async (req, res) => {
  try {
    const { venue_id, route_geojson, event_time } = req.body;

    // 🔴 INSERT VALIDATION HERE (Before Database Insert)
    if (!validateRoute(route_geojson)) {
      return res.status(400).json({ message: "Main roads not allowed" });
    }

    // If route is valid → save event
    const result = await db.query(
      `INSERT INTO events (venue_id, route_geojson, event_time, status)
          VALUES ($1, $2, $3, $4) RETURNING *`,
      [venue_id, route_geojson, event_time, "pending"],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
exports.createEvent = async (req, res) => {
  try {
    const { venue_id, route_geojson, event_time } = req.body;

    // 🔴 Route Validation
    if (!validateRoute(route_geojson)) {
      return res.status(400).json({ message: "Main roads not allowed" });
    }

    // 🟡 Calculate Risk Score
    const riskScore = calculateRisk(route_geojson, event_time);

    // 🟢 Insert Into Database
    const result = await db.query(
      `INSERT INTO events (venue_id, route_geojson, event_time, status, risk_score)
          VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [venue_id, route_geojson, event_time, "pending", riskScore],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
