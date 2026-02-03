//**  Simple HTTP Server   ***
import { createServer } from "node:http";

const portno = 3000;
const ipAddress = "127.0.0.1";
const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>\n");
});

server.listen(portno, ipAddress, () => {
  console.log(`Listening on ${ipAddress}:${portno}`);
});
