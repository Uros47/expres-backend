const db = require("../models");
const User = db.user;

const bcrypt = require("bcryptjs");

exports.signup = (request, response) => {
  const user = new User({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 6),
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });
  response.send({ message: "User was registered successfully!" });
};
