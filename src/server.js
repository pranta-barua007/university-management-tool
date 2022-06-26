import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/me", (req, res) => {
  res.send("Hello from me route or path");
});

app.post("/login", (req, res) => {
  const body = req.body;
  res.json({ hello: body.email });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is runnig on PORT" + PORT);
});
