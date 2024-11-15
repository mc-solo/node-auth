const bcrypt = require("bcryptjs");

async function initUsers() {
  try {
    const users = [
      {
        id: 1,
        name: "Wondwosen",
        email: "wondwosen.asegid@gmail.com",
        password: await bcrypt.hash("Password!", 10),
      },
      {
        id: 2,
        name: "Henock",
        email: "honock.asegid@gmail.com",
        password: await bcrypt.hash("Password2", 10),
      },
      {
        id: 3,
        name: "Yared",
        email: "yared@gmail.com",
        password: await bcrypt.hash("Password3", 10),
      },
    ];
    return users;
  } catch (error) {
    console.error("Error initializing users", error.message);
    throw error;
  }
}

module.exports = initUsers;
