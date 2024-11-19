const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const bcrypt = require("bcryptjs");
const port = process.env.port || 5000;

app.use(
  session({
    secret: "mySuperSecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 50000 },
  })
);

async function hashPassword(password) {
  try {
    await bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        throw err;
      }
      return hash;
    });
  } catch {
    console.error("Error hashing password!");
  }
}

const users = [
  {
    id: 1,
    username: "Wondwosen",
    password: hashPassword("passwor123"),
    role: "admin",
  },
  {
    id: 2,
    username: "john",
    pasword: hashPassword("123password"),
    role: "user",
  },
];
console.log("password for user1", users.at(0).password);
console.log();
console.log("password for user2", users.at(1).password);

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

app.post("login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).send("Invalid username or password");
  }

  // check for password

  const isMatch = await bc;
});
