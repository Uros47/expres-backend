const express = require("express");
const router = express.Router();

router.get(`/user`, (request, response) => {
  response.send({ type: "GET" });
});

router.post(`/register`, (request, response) => {
  response.send({ type: "POST" });
});

module.exports = router;
