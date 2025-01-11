const ProjectSchema = require("../schema/project.schema");

// checking if project already exists based on title
const createProject = async (project) => {
  const newProject = await ProjectSchema.create(project);
  return newProject;
};

// todo: change this to id if needed
const findProjectByName = async (name) => {
  const project = await ProjectSchema.findOne({ name });
  if (!project) return false;
  return project;
};

// todo: finding projec with name
const findProjectById = async (id) => {
  const project = await ProjectSchema.findById(id);
  if (!project) return false;
  return project;
};

// data : object with changed values with keys
const updateProject = async (id, data) => {
  const updatedProject = await ProjectSchema.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    { runValidators: true },
  );
  return updatedProject;
};

const deleteProject = async (id) => {
  const deletedProject = await ProjectSchema.findByIdAndDelete(id);
  return deletedProject;
};

const findAllProjects = async (skip, limit) => {
  const projects = await ProjectSchema.find().skip(skip).limit(limit);
  const totalProjects = await ProjectSchema.countDocuments();
  return {
    projects,
    totalProjects,
  };
};

module.exports = {
  findProjectByName,
  findProjectById,
  deleteProject,
  createProject,
  updateProject,
  findAllProjects,
};
