const purchase = require("../schemas/purchase");
exports.postTshirt= async (req, res) => {
  
    const newPurchase = new purchase({
        orderID: req.body.orderID,
        name: req.body.name,
        admissionNumber: req.body.admissionNumber,
        mobileNumber: req.body.mobileNumber,
        branch: req.body.branch,
        tshirtSize: req.body.tshirtSize,
        transactionID: req.body.transactionID,  
        hostel: req.body.hostel,
        roomNumber:req.body.roomNumber
    });

    newPurchase.imageURL = req.files(f => ({ url: f.path, filename: f.filename }));
    const data = await newPurchase.save();
    console.log(data); // checking 
    
    res.status(200).json(data);
};

exports.renderTshirt =  (req,res )=>{
    //wait;
    //render tshirt form 

}