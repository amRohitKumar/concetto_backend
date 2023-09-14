const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const upload = multer({ storage });

const { renderTshirt, postTshirt } = require('../controllers/purchase');

const purchaseRoute = express();

purchaseRoute.use(express.json());
purchaseRoute.use(bodyParser.urlencoded({ extended: true }));

purchaseRoute.post('/purchase', upload.single('image') , postTshirt);
purchaseRoute.get('/purchase', renderTshirt);

module.exports = purchaseRoute;