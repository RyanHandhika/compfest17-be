import http from "http";
import app from "./app.js";

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
