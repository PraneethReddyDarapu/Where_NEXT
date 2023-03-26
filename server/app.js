var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const PubSub = require("pubsub-js");

// dotenv
require("dotenv").config();

const auth = require("./lib/middleware");
var app = express();
const ws = require("ws");
const wsServer = new ws.Server({ noServer: true });
wsServer.on("connection", (socket) => {
  socket.on("message", (message) => console.log(message));
});

var indexRouter = require("./routes/auth");
// var usersRouter = require("./routes/users");
var toursRouter = require("./routes/tours");
var continentsRouter = require("./routes/continents");
var blogRouter = require("./routes/blogs");
var bookingRouter = require("./routes/booking");
var hangoutRouter = require("./routes/hangout");
var chatRouter = require("./routes/chat");
var travelThemeRouter = require("./routes/travel_theme");
var profileRouter = require("./routes/profile");

// cors allow all
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", indexRouter);
app.use("/api/tours", auth, toursRouter);
app.use("/api/continents", auth, continentsRouter);
app.use("/api/blogs", auth, blogRouter);
app.use("/api/booking", auth, bookingRouter);
app.use("/api/hangout", auth, hangoutRouter);
app.use("/api/chat", auth, chatRouter);
app.use("/api/travel_theme", auth, travelThemeRouter);
app.use("/api/profile", auth, profileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const server = app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
server.on("upgrade", (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    // console.log(request.url);
    // consume messages from pubsub js and send to client
    PubSub.subscribe("chat", (msg, data) => {
      let request_url = request.url.split("/")[1];
      if (request_url == data.hangout_id) {
        socket.send(JSON.stringify(data));
      }
    });

    PubSub.subscribe("chat_personal", (msg, data) => {
      let request_url = request.url.split("/")[2];
      if (request_url == data.user_id || request_url == data.target_user_id) {
        socket.send(JSON.stringify(data));
      }
    });
    wsServer.emit("connection", socket, request);
  });
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
