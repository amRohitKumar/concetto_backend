const Purchase = require("../schemas/purchase");

exports.postTshirt = async (req, res) => {
  console.log(req.file);

  const {
    orderID,
    name,
    admissionNumber,
    mobileNumber,
    branch,
    tshirtSize,
    transactionID,
    hostel,
    roomNumber,
  } = req.body;

  const { path: imageURL } = req.file;
  const purchase = new Purchase({
    orderID,
    name,
    admissionNumber,
    mobileNumber,
    branch,
    transactionID,
    tshirtSize,
    hostel,
    roomNumber,
    imageURL,
  });
  const data = await purchase.save();
  console.log(data);
  res.send(data);
};

exports.renderTshirt = (req, res) => {
  //wait;
  //render tshirt form
};
