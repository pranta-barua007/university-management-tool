import express from "express"; //importing or using express package in this file
import { insertUser, findUserByEmail } from "./models/user/user.model.js";

const app = express(); //intializing express to app constant

app.use(express.json()); //middleware function to decode JSON req

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/me", (req, res) => {
  res.send("Hello from me route or path");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const userFound = findUserByEmail(email);
  let user = null;

  if (userFound) {
    if (userFound.password === password) {
      user = userFound;
    }
  }

  res.json(user);
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const createUser = insertUser(email, password);
  res.json({ data: createUser });
});

const PORT = 4000;
app.listen(PORT, () => {
  //it runs the server
  console.log("Server is runnig on PORT" + " " + PORT);
});
