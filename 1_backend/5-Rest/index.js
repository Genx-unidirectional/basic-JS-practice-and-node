const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const port = 3000;

let posts = [
  {
    id: uuidv4(),
    username: "Apna college",
    content: "We ara just started here let's see how far ew can go from here",
  },
  {
    id: uuidv4(),
    username: "Henry royce",
    content: "Small things makes perfection but perfection is not small thing",
  },
  {
    id: uuidv4(),
    username: "Elon musk",
    content:
      "If something is important to get done you should keep doing it or die trying",
  },
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Good to see you again");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// app.delete("/posts/:id", (req, res) => {
//   const { id } = req.params;
//   posts = posts.filter((post) => post.id !== id);
//   res.redirect("/posts");
// });
app.get("/posts/new", (req, res) => {
  console.log("second");
  res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
  console.log("First");
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render("edit.ejs", { post });
});

app.post("/posts", (req, res) => {
  console.log(req.body);
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  let post = posts.find((post) => post.id === id);
  post.content = content;
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((post) => post.id !== id);
  res.redirect("/posts");
});
