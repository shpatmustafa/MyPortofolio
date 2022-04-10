const User = require("../models/user");
const APIError = require("../utils/APIError");
const http_status = require("http-status");

const getOne = (req, res, next) => {
  User.findOne({ _id: req.params.user_id })
    .lean()
    .exec()
    .then((data) => {
      res.json({
        success: true,
        data: data,
      });
    })
    .catch((e) => {
      next(new APIError(e.message, http_status.METHOD_NOT_ALLOWED));
    });
};

const create = (req, res, next) => {
  const data = req.body;
  User.findOne({
    $or: [{ email: data.email }, { full_name: data.full_name }],
  }).then((user) => {
    if (user) {
      res.json({
        success: false,
        message:
          user.email == data.email
            ? `Email ${data.email} already exists.`
            : `Username ${data.username} already exists.`,
      });
    } else {
      const user = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        biography: data.biography,
        profilePic: data.profilePic,
        phone_no: data.phone_no,
        cvLink: data.cvLink,
        nationality: data.nationality,
        city: data.city,
        certificate: data.certificate,
        jobStatus: data.jobStatus,
        birthDate: data.birthDate,
      });
      user
        .save()
        .then((saved_user) => {
          res.json({
            success: true,
            data: saved_user,
          });
        })
        .catch((e) => {
          next(new APIError(e.message, http_status.METHOD_NOT_ALLOWED));
        });
    }
  });
};

module.exports = { getOne, getAll, update, create };
