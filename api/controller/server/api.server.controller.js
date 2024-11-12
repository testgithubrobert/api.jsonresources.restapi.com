"use strict";
const express = require("express");
const api = express();
const server = require("node:http").createServer(api);
const events = require("node:events");
const EventEmitter = new events();
const cors = require("cors");
require("dotenv").config();
require("dotenv").configDotenv();

// manage websocket for the API connections
const WebSocket = require("ws").Server;
const connection = new WebSocket({ port: 5000 });
connection.on("connection", (ws) => {
  console.log("web socket connection made!");
  ws.on("message", (message) => ws.send(message));
  ws.on("error", (error) => ws.send(error));
});
// middleware for CORS handling and overcome CORS errors to allow * access
// allow credentials like cookies to be passed
api.use(cors({ origin: "*", Credential: true }));
api.use((request, response, next) => {
  this.response = response;
  this.request = request;

  this.response.setHeader("Content-Type", "Application/json");
  this.response.statusCode = 200;
  this.response.setHeader("Access-Control-Allow-Origins", "*");
  this.response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, PATCH, DELETE, POST"
  );
  this.response.setHeader("Access-Control-Allow-Credentials", true);
  this.response.setHeader("Connection", "Keep-alive");

  this.request.headers || this.request ? next() : "";
});

// middleware for handling API
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
api.use(cookieParser());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: Boolean(bodyParser.urlencoded ? false : undefined) }));
api.use(express.urlencoded({ extended: Boolean(bodyParser.urlencoded ? false : undefined) }));
api.use(express.json());
api.set("port", process.env.PORT || 4000);
api.set("host", process.env.HOST);
api.set("strict routing", Boolean(true));
api.set("NODE_ENV", "production");
// use error handler only when the app is in development mode
process.env.NODE_ENV !== api.get("NODE_ENV")
  ? api.use(require("errorhandler")())
  : "";
// middleware for api routers 
api.use(
  "/resources",
  require("../routers/api.routers.controller")
);

// middleware for starting up API server
EventEmitter.on("connect", () =>
  console.log(`${String("someone has connected to server")}`)
);

server.on("connection", () => EventEmitter.emit("connect"));

server.listen(process.env.PORT || api.get("port"), api.get("host"), () => {
  EventEmitter.on("listening", () =>
    console.log(
      `api server running on port ${process.env.PORT || api.get("port")}`
    )
  );
  EventEmitter.on("error", () =>
    console.log(
      `ERROR: api server not running on port ${
        process.env.PORT || api.get("port")
      }`
    )
  );
  server.listening
    ? EventEmitter.emit("listening")
    : EventEmitter.emit("error");
});
