const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");
require("dotenv").config();
const sponserRoute = require("./routes/sponserRoute");
const purchaseRoute = require("./routes/purchaseRoute");
const keySecretRoute = require("./routes/keySecretRoute");
const app = express();
app.use(cors());

const DB_URL =
  process.env.DB_URL ||
  "mongodb://localhost:27017/Concetto";

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb" + err));
const PORT = process.env.PORT || 8000;


//routes
app.use('*', (req, res, next) => {
  console.log(chalk.red(req.method), chalk.blue(req.baseUrl));
  next();
})

app.use("/api", sponserRoute);
app.use("/api", purchaseRoute);
app.use("/api", keySecretRoute);


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
