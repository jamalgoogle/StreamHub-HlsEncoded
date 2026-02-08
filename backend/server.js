const express = require("express");
const path = require("path");

const app = express();

// Serve videos
app.use("/videos", express.static(path.join(__dirname, "../videos")));

// Serve client
app.use("/", express.static(path.join(__dirname, "../client")));

app.get("/stream", (req, res) => {
  res.json({
    url: "http://localhost:3000/videos/playlist.m3u8"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
