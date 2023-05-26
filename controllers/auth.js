const users = require("../models/User");
// console.log(users);
const signupController = async (req, res) => {
  console.log("signupcontroller");
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    res.status(403).send("Email and Password are required");
    return;
  }
  const id = Math.floor(Math.random() * 1000);
  users.push({
    email,
    password,
    id,
  });
  res.status(200).json({ id });
};

const loginController = async (req, res) => {
  console.log("LoginController was called");
  // console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  console.log(password);
  if (!email || !password) {
    res.status(403).send("Email is requried");
    return;
  }
  // console.log(email);
  const user = users.find((item) => {
    return item.email == email;
  });
  // console.log(user);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  if (user.password != password) {
    res.status(404).send("password is incorrect");
    return;
  }
  res.status(200).json(user);
};
module.exports = {
  loginController,
  signupController,
};
