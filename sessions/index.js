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
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    console.error("Error hashing password", error);
  }
}
async function createUsers() {
  const passwords = await Promise.all([
    hashPassword("passwor123"),
    hashPassword("123password"),
  ]);

  const users = [
    {
      id: 1,
      username: "Wondwosen",
      password: passwords[0], // Use the resolved hash
      role: "admin",
    },
    {
      id: 2,
      username: "john",
      password: passwords[1],
      role: "user",
    },
  ];

  console.log("Password for user1:", users.at(0).password);
  console.log("Password for user2:", users.at(1).password);
}

createUsers();

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
