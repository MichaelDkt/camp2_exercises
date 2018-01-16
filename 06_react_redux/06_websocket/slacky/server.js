const express = require("express");
const WebSocket = require("ws");
const server = require("http").createServer();
const path = require("path");

const app = express();

let numberOfUsers = 0;

const wss = new WebSocket.Server({server});
wss.on("connection", (ws, req) => {
  numberOfUsers += 1;
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(numberOfUsers);
    }
  });

  ws.on("message", (data) => {
    if (data === "CLOSE") {
      numberOfUsers -= 1;
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(numberOfUsers);
        }
      });
    }
  });
  ws.on("error", console.warn);
});

server.on("request", app);
server.listen(4000, () => console.log("Server listening on 4000"));
