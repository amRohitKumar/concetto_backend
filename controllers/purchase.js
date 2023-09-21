const Purchase = require("../schemas/purchase");
const sendMail = require("../mailsender");

exports.postTshirt = async (req, res) => {
  try {
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
      email,
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
      email,
    });
    const data = await purchase.save();
    // console.log(data);

    const mailObj = {
      to_mail: email,
      name,
      admn_no: admissionNumber,
      trans_id: transactionID,
      _id: data._id,
      date: data.createdAt,
      size: tshirtSize,
    };
    // console.log(mailObj);
    await sendMail(mailObj);
    res.send(data);
  } catch (e) {
    return res.status(400).send({ msg: e.message });
  }
};

exports.renderTshirt = (req, res) => {
  //wait;
  //render tshirt form
};
