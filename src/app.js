import express from "express"; //importing or using express package in this file
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express(); //intializing express to app constant

app.use(helmet()); // secutiy middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json()); //middleware function to decode JSON req

app.get("/me", (req, res) => {
  res.send("Hellooooo");
});

export default app;
