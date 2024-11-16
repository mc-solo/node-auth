const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const initUsers = require("../models/user");

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const users = await initUsers();
        const user = users.find((u) => u.email === email);

        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return done(null, false, {
            message: "Incorrect password!, Please, try again",
          });
        }

        return done(null, user);
      } catch (error) {
        console.log(`Error during authentication ${error.message}`);
        return done(null, false, { message: error.message });
      }
    }
  )
);
