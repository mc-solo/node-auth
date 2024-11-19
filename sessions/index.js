const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const port = process.env.port || 5000;

app.use(
  session({
    secret: "mySuperSecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 50000 },
  })
);

// dummy user data base
const users = [
  { id: 1, username: "Wondwosen", password: "password123", role: "admin" },
  { id: 2, username: "john", pasword: "1234", role: "user" },
];

// middleware to parse json data
app.use(express.json());

app.use(
  session({
    secret: "mySuperSecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 50000 },
  })
);

app.use(express.urlencoded({ extended: true }));
// root
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome</h1>
         <a href="/login">Login</a> |
         <a href="/dashboard">Dashboard</a> |
         <a href="/logout">Logout</a>`
  );
});

// login GET
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "sessions", "routs", "login.html"));
});
app.listen(port, () => {
  console.log("app is running on port number:", port);
});
