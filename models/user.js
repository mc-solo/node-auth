const bcrypt = require("bcryptjs");

const users = [
  {
    id: 1,
    name: "Wondwosen",
    email: "wondwosen.asegid@gmail.com",
    password: bcrypt.hash("Password!", 10, (error, hash) => {
      if (err) throw error;
      console.log(hash);
    }),
  },
  {
    id: 2,
    name: "Henock",
    email: "honock.asegid@gmail.com",
    password: bcrypt.hash("Password2", 10, (error, hash) => {
      if (error) throw error;
      console.log(hash);
    }),
  },
  {
    id: 3,
    name: "Yared",
    email: "yared@gmail.com",
    password: bcrypt.hash("Password3", 10, (error, hash) => {
      if (error) throw error;
      console.log(hash);
    }),
  },
];
