const Project = require("../models/project");
const APIError = require("../utils/APIError");
const http_status = require("http-status");

const getOne = (req, res, next) => {
  User.findOne({ _id: req.params.project_id })
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

  const project = new Project({
    name: data.name,
    description: data.description,
    image: data.image,
    userID: data.userID,
  });
  project
    .save()
    .then((projectData) => {
      res.json({
        success: true,
        data: projectData,
      });
    })
    .catch((e) => {
      next(new APIError(e.message, http_status.METHOD_NOT_ALLOWED));
    });
};
module.exports = { getOne, create };
