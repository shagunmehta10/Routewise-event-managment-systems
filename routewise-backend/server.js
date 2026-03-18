const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

pool
  .connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch((err) => console.error(err));

const venueRoutes = require("./routes/venueRoutes");
const eventRoutes = require("./routes/eventRoutes");

app.use("/api/venues", venueRoutes);
app.use("/api/events", eventRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
