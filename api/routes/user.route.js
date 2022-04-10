const router = require("express").Router();
const { getOne, create } = require("../controllers/user.controller");

router.get("/:user_id", getOne);

router.post("/", create);

module.exports = router;
