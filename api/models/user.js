const mongoose = require("mongoose");

const validateEmail = function (email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const validatePhone = function (phone) {
  const regex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  return regex.test(phone);
};

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required!"],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required!"],
    validate: [validateEmail, "Please fill a valid email address"],
  },
  biography: {
    type: String,
    default: null,
  },
  profilePic: {
    type: String,
    default: null,
  },
  cvLink: {
    type: String,
  },
  nationality: String,
  certificate: [
    {
      name: String,
      certificatedFrom: String,
      finishedDate: Date,
    },
  ],
  phoneNo: {
    type: String,
    validate: [validatePhone, "Please enter a valid phone number!"],
  },
  city: {
    type: String,
    required: [true, "City is required!"],
  },
  jobStatus: {
    type: String,
  },
  birthDate: Date,
  created_date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
