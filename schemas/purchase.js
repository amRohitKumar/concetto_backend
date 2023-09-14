const mongoose = require("mongoose");
const purchaseTshirtSchema = mongoose.Schema({
  
    orderID :{
        type :String,
        // required :true,
        // unique :true
    },
    name :{
        type:String ,
        // required :true
    },
    admissionNumber:{
        type: String,
        // required :true ,

    },
    mobileNumber :{
        type : String ,
        // required :true 
    },
    branch :{
        type: String ,
        // required :true 
    },
    tshirtSize :{
        type : String ,
        // required :true 
    },
    transactionID :{
        type :String,
        // required: true 
    },
    hostel: {
        type: String,
        // required:true
    },
    roomNumber: {
        type: String,
        // required:true
    },
    imageURL: {
        _id: false,
        url: String,
        filename: String,
    }   

});
module.exports = mongoose.model("Purchase", purchaseTshirtSchema);