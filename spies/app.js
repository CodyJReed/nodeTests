const { saveUser } = require("./db");

module.exports.handleSignup = (email, password) => {
  // check if email already exists
  saveUser({
    email,
    password
  });
  // send welcome email
};
