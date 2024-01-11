const express = require("express");
const app = express();
const instagram = require("./data.json");
const port = 8000;
const path = require("path");

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get("/", (req, res) => {
  res.render("Home.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("Rolldice.ejs", { num: diceVal });
});

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const userData = instagram[username];
  if (userData) {
    res.render("ig.ejs", { userData });
  } else {
    res.render("no.ejs");
  }
});
