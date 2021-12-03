const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const socket = require("./socket");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
const server = require("http").createServer(app);
socket(require("socket.io")(server));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  })
);

app.use("/api/users", require("./routes/users"));
app.use("/api/chats", require("./routes/chats"));
app.use("/api/friends", require("./routes/friends"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

// app.post("/api/chats/1", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "test.html"));
// });

server.listen(PORT, async () => {
  console.log(`Server running on PORT ${PORT}`);
});
