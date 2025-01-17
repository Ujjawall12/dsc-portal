const {
  findProjectById,
  deleteProject,
  createProject,
  updateProject,
  findAllProjects,
  findProjectByName,
} = require("../services/project.service");

// METHOD -> POST
const createProjectController = async (req, res) => {
  try {
    // this validatedData is added after success in validation in middleware
    const { validatedData } = req;
    // might change the name here to id
    const projectExists = await findProjectByName(validatedData.name);

    if (projectExists)
      return res.status(409).json({
        success: false,
        message: "Project with same name already exists",
      });

    const newProject = await createProject(validatedData);

    return res.status(201).json({
      success: true,
      message: "Project Created Successfully",
      data: newProject,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error while creating project",
    });
  }
};

// METHOD -> GET ( all projects )
const getAllProjectsController = async (req, res) => {
  try {
    const maxLimit = 10; // setting max limit to 10
    let { page, count, search, technology } = req.query;
    page = parseInt(page, 10);
    // return only 10 projects if count is greater than 10
    if (count > maxLimit || count === undefined) {
      count = parseInt(count, 10) || 10;
    }
    const skip = (page - 1) * count;
    const { projects, totalProjects } = await findAllProjects(
      skip,
      count,
      search,
      technology,
    );
    const totalPages = Math.ceil(totalProjects / count);
    const isLastPage = page >= totalPages;
    if (projects.length === 0)
      return res.status(404).json({
        success: false,
        data: [],
        message: "No projects found",
      });

    return res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: projects,
      meta: {
        totalProjects,
        totalPages,
        isLastPage,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching projects",
    });
  }
};

const getProjectByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await findProjectById(id);
    if (!project)
      return res.status(400).json({
        success: false,
        message: "Project not found",
      });

    return res.status(200).json({
      status: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while fetching project",
    });
  }
};

// METHOD -> PATCH
const updateProjectController = async (req, res) => {
  try {
    const { id } = req.params;
    const { validatedData } = req;

    const projectExists = await findProjectById(id);
    if (!projectExists)
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    const updatedProject = await updateProject(
      projectExists._id,
      validatedData,
    );
    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while updating project",
    });
  }
};

// METHOD -> DELETE
const deleteProjectController = async (req, res) => {
  try {
    const { id } = req.params;

    const projectExists = await findProjectById(id);
    if (!projectExists)
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });

    const deletedProject = await deleteProject(id);
    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: deletedProject,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error while deleting project",
    });
  }
};

module.exports = {
  createProjectController,
  updateProjectController,
  deleteProjectController,
  getAllProjectsController,
  getProjectByIdController,
};
