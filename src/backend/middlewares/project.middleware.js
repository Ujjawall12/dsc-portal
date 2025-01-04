const { createProjectValidationSchema } = require("../validation/project.validation");

const createProjectValidation = (req, res, next) => {
  try {
    const { success, data, error } = createProjectValidationSchema.safeParse(req.body);
    if (!success) return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.errors.map(err => ({
        field: err.path.join("."),
        message: err.message
      }))
    })
    req.validatedData = data;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server errro"
    })
  }
}

module.exports = {
  createProjectValidation
}