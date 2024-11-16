const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const path = require("path");
const authRoutes = require("./routes/auth");

dotenv.config(); // Load environment variables
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port:", 5000);
});
