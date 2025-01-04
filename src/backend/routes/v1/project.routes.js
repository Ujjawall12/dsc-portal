const { Router } = require("express");
const { createProjectValidation } = require("../../middlewares/project.middleware");
const { createProjectController } = require("../../controllers/project.controller");
const router = Router();


router.route("/").get();
router.route("/").post(createProjectValidation, createProjectController);
router.route("/update/:id").patch();
router.route("/delete/:id").delete();

module.exports = router;