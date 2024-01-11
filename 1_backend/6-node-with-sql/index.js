const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const methodOverride = require("method-override");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// MYSQL
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Gexstar9069><",
});

// Listener

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// create the connection to database
// let data = [];
// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser());
// }
// try {
//   connection.query(q, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// function getRandomUser() {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }

// console.log(getRandomUser());

//Home route

app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/users", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      res.render("users.ejs", { result });
    });
  } catch (err) {
    console.log(err);
  }
  // connection.end();
});

//NEW USER

app.get("/users/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/users", (req, res) => {
  const {
    formUsername: username,
    formPassword: password,
    formEmail: email,
  } = req.body;
  const id = faker.string.uuid();
  let newUser = [id, username, email, password];
  let q = `INSERT INTO user (id, username,email,password ) VALUES (?,?,?,?)`;
  try {
    connection.query(q, newUser, (err, result) => {
      if (err) throw err;
      console.log("success");
      res.redirect("/users");
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/users/:id/edit", (req, res) => {
  console.log("triggered in api");
  const { id } = req.params;
  console.log(typeof id);
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      const user = { ...result[0] };
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
  }
  // connection.end();
});

app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const { formUsername, formPassword } = req.body;
  console.log(formUsername);
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      const { password } = result[0];
      console.log(password);
      if (formPassword === password) {
        let q = `UPDATE user SET username='${formUsername}' WHERE id='${id}'`;
        connection.query(q, (err, result) => {
          if (err) throw err;
          console.log("success");
          res.redirect("/users");
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/users/:id/delete", (req, res) => {
  console.log("triggered in api");
  const { id } = req.params;
  console.log(typeof id);
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      const { id, username, password } = { ...result[0] };
      console.log(password);
      let user = { id, username };
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    console.log(err);
  }
  // connection.end();
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const { formPassword } = req.body;
  let q = `SELECT id, password FROM user WHERE id='${id}'`;
  connection.query(q, (err, result) => {
    try {
      if (err) throw err;
      const { id, password } = result[0];
      if (password === formPassword) {
        console.log("success");
        let q = `DELETE FROM user WHERE id='${id}'`;

        connection.query(q, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
});
