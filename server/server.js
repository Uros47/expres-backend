const express = require("express");
const routes = require("../routes/api");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(port, () => console.log(`Server started on port ${port}`));
