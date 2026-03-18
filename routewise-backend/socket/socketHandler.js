module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("liveLocation", (data) => {
      io.emit("updateLocation", data);
    });

    socket.on("emergencyAlert", (data) => {
      io.emit("clearRoute", data);
    });
  });
};
