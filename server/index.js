const express = require("express");
const routes = require("../routes/user");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

app.listen(port, () => console.log(`Server started on port ${port}`));
