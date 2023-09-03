const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const { getKeySecret } = require('./controllers/secret');
const { purchase } = require('./controllers/purchase');
const {getSponsor,postSponsor} = require('./controllers/sponsor');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb" + err));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});

app.post('/purchase', purchase);

app.get('/sponsor', getSponsor);
app.get('/getKeySecret', getKeySecret);

app.post('/sponsor', postSponsor);