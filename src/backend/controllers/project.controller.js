const {
  findProject,
  deleteProject,
  createProject,  
  updateProject,
  projectExists,
  findAllProjects
} = require("../services/project.service");


const createProjectController = async (req, res) => {
  try {
    console.log(req.body)
    // this validatedData is added after success in validation in middleware
    const { validatedData } = req;
    // might change the name here to id
    const projectExists = await findProject(validatedData.name);
    
    if (projectExists) return res.status(409).json({
      success: false,
      message: "Project with same name already exists"
    });

    const newProject = await createProject(validatedData);

    return res.status(201).json({
      success: true,
      message: "Project Created Successfully",
      data: newProject
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating project"
    })
  }
};

module.exports = {
  createProjectController
};