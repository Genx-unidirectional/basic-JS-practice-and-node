const express = require("express");
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get("/register", (req, res) => {
  const { username, password } = req.params;
  res.send(`Welcome ${username} with ${password}`);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body();
  res.send(`Welcome ${username} with ${password}`);
});
