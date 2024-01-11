const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
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

// const chat1 = new Chat({
//   from: "todd",
//   to: "natalie",
//   msg: "are you down tonight",
//   date: new Date(),
// });
// chat1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const chatArray = [
  {
    from: "mike",
    to: "lana",
    msg: "let's  roll",
    date: new Date(),
  },
  {
    from: "micheal",
    to: "faith",
    msg: "let's do three some",
    date: new Date(),
  },
  {
    from: "sara",
    to: "bradly",
    msg: "give me more money",
    date: new Date(),
  },
  {
    from: "nike",
    to: "sky",
    msg: "We can't make it",
    date: new Date(),
  },
];

// Chat.insertMany(chatArray);

Chat.find()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
