import http from "http";
import app from "./app.js";
import { mongoConnect } from "./services/mongo.js";
import donenv from "dotenv";

donenv.config();
const server = http.createServer(app); // passing express app to node server

async function startServer() {
  await mongoConnect();

  const PORT = process.env.PORT || 4000;

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}....`);
  });
}

startServer();
