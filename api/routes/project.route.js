const router = require("express").Router();
const { getOne, create } = require("../controllers/project.controller");

router.get("/:project_id", getOne);

router.post("/", create);

module.exports = router;
