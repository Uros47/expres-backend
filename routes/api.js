const express = require("express");
const router = express.Router();

router.get(`/user`, (request, response) => {
  response.send({ name: "user" });
});

router.post(`/register`, (request, response) => {
  response.send({ token: "user" });
});

module.exports = router;
