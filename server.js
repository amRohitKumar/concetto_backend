const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const sponserRoute = require('./routes/sponserRoute');
const purchaseRoute = require('./routes/purchaseRoute');
const keySecretRoute = require('./routes/keySecretRoute');
const app = express();
app.use(cors());
app.use('/api', sponserRoute);
app.use('/api', purchaseRoute);
app.use('/api', keySecretRoute);

mongoose
  // .connect("mongodb://localhost:27017/Concetto", {
  .connect("mongodb+srv://narendra-maurya:test1234@cluster0.2p53s5l.mongodb.net/concetto2023",{ useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb" + err));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});


