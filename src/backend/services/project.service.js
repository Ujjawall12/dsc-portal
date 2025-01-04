const ProjectSchema = require("../schema/project.schema");

// checking if project already exists based on title
const createProject = async (project) => {
  const newProject = await ProjectSchema.create(project);
  return newProject
};


// todo: change this to id if needed
const findProject = async (name) => {
  const project = await ProjectSchema.findOne({name})
  if (!project) return false
  return project
}

// data : object with changed values with keys
const updateProject = async(id, data) => {  
  const updatedProject = await ProjectSchema.findOneAndUpdate({
    _id: id
    },
    data,
    {runValidators: true}
  );
  return updatedProject;
};

const deleteProject = async (id) => {
  const deletedProject = await ProjectSchema.findByIdAndDelete(id);
  return deletedProject;
};

const findAllProjects = async () => {
  const projects = await ProjectSchema.find();
  return projects;
}

module.exports = {
  findProject,
  deleteProject,
  createProject,  
  updateProject,
  findAllProjects
}