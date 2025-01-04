const zod = require("zod");

const createProjectValidationSchema = zod.object({
  part: zod.string({
    invalid_type_error: "Part must be string",
    required_error: "Part is required",
  }).max(30, {
    message: "Part name should not exceed 30 characters."
  }),
  name: zod.string({
    invalid_type_error: "Name must be string"
  }).max(20, {
    message: "Name should not exceed 30 characters."
  }).min("Name is required"),

  subtitle: zod.string({
    invalid_type_error: "Subtitle must be string",
    required_error: "Subtitle is required",
  }).max(100, {
    message: "Subtitle should not exceed 100 characters."
  }),
  version: zod.string({
    invalid_type_error: "Version must be string",
    required_error: "Version is required",
  }).max(20, {
    message: "version should not exceed 20 characters"
  }),
  progress: zod.number({
    invalid_type_error: "Progress must be number between 1 and 100",
    required_error: "Progress is required"
  }).min(1, {
    message: "Progress should not be less than 1"
  }).max(100, {
    message: "Progess should not be greater tha 100"
  }),
  headline: zod.string({
    invalid_type_error: "Headline must be string",
    required_error: "Headline is required",
  }).max(200, {
    message: "Headline should not exceed 200 characters"
  }),
  description: zod.string({
    invalid_type_error: "Description must be string",
    required_error: "Description is required",
  }),
  image: zod.string({
    invalid_type_error: "Image must be url of the image (string)",
    required_error: "Image is required",
  }),
  link: zod.string({
    invalid_type_error: "Link must be string",
    required_error: "Link is required"
  }),
  startDate: zod.date({
    invalid_type_error: "Start date must be a date",
    required_error: "startDate is required"
  }),
  endDate: zod.date({
    invalid_type_error: "End date must be a date",
    required_error: "endDate is required"
  }),
  groupProject: zod.boolean({
    invalid_type_error: "Group project must be boolean",
    required_error: "Group project is required"
  }),
  teamMembers: zod.array(zod.string().nonempty({
    message: "Each team member's name must be a non-empty string."
  })).optional(),
  tags: zod.array(zod.string().nonempty({
    message: "Tags must be non-empty string"
  })).optional()
});

module.exports = {
  createProjectValidationSchema
}