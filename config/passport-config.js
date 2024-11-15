const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const users = require("../models/user");

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      const user = users.find((u) => u.email === email);
      if (!user) {
        return done(null, false, { message: "Incorrect email!" });
      }
    }
  )
);
