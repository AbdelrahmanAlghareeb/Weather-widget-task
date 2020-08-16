const express = require("express");
const server = express();
const config = require("./config");
const cors = require("cors");
const path = require("path");

server.use(cors());

// global views comfig
server.use(express.static("./views"));

// render the view
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});

// server config and come to live
server.listen(config.server.port, () => {
  console.log("Server is listening 🔥🔥🔥");
});
