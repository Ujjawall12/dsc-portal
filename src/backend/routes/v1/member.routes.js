const { Router } = require("express");
const { getMembersController } = require("../../controllers/member.controller");

const router = Router();

router.get("/", getMembersController);

module.exports = router;