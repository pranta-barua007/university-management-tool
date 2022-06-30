import express from "express"; //importing or using express package in this file
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express(); //intializing express to app constant

app.use(helmet()); // security middleware
app.use(
  // cross origin middleware
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(morgan("combined")); // logging middleware
app.use(express.json()); // middleware function to decode JSON req

app.get("/", (req, res) => {
  res.send("Hello from root route");
});

app.get("/you", (req, res) => {
  res.send("Hello from you route");
});

app.get("/me", (req, res) => {
  res.send("Hellooooo");
});

export default app;
