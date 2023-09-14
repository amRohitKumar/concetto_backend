const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
    cloud_name:'dtihtel7x',
    api_key:'974144411452969',
    api_secret:'F6RcTEh4xnHKobLDjGJc_0waXcU'
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "CONCETTO_UPI",
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});
module.exports = {
    cloudinary,
    storage
}