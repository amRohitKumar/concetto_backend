const mongoose = require("mongoose");
const purchaseTshirtSchema = mongoose.Schema({
    orderID:String,
    name:String,
    admissionNumber:String,
    mobileNumber:Number,
    branch:String,
    tshirtSize:String,
    transactionID:String,
    hostel:String,
    roomNumber:String,
    imageUrl:String
});
module.exports = mongoose.model("purchase", purchaseTshirtSchema);
