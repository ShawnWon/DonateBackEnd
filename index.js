const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./config/db");

const app = express();
const busstop = require("./routes/busstop");
const donation = require("./routes/donation");
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

app.use(cors());

app.use("/", busstop);
app.use("/", donation);
app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

port = 3300;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
