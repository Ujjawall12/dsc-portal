const { Router } = require("express");
const {
  createProjectValidation,
  updateProjectValidation,
} = require("../../middlewares/project.middleware");
const {
  createProjectController,
  updateProjectController,
  deleteProjectController,
  getAllProjectsController,
  getProjectByIdController,
} = require("../../controllers/project.controller");
const router = Router();

router.route("/").get(getAllProjectsController); // get all projects data
router.route("/:id").get(getProjectByIdController); // get project data by id
router.route("/").post(createProjectValidation, createProjectController);
router
  .route("/update/:id")
  .patch(updateProjectValidation, updateProjectController);
router.route("/delete/:id").delete(deleteProjectController);

module.exports = router;
