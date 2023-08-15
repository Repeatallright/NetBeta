const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "../client/src/imgs/Posts");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];
const fileFileter = (req, file, cb) => {
  types.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

module.exports = multer({ storage, fileFileter });
