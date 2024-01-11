const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 3000;
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//Database connection
main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome we are happy to see you again");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats._id);
  console.log(chats);
  res.render("chats.ejs", { chats });
});

// Api for new chat added

app.get("/chats/new", (req, res) => {
  console.log("Triggered");
  res.render("new.ejs");
});

app.post("/chats", (req, res) => {
  const { from, to, msg } = req.body;
  const newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    date: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

app.get("/chat/:id/edit", (req, res) => {
  const { id } = req.params;

  res.send(id);
});

app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.patch("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { from, to, msg } = req.body;
  await Chat.findByIdAndUpdate(id, {
    from: from,
    to: to,
    msg: msg,
    date: new Date(),
  });
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Deleting");
  await Chat.deleteOne({ _id: id });
  res.redirect("/chats");
});
