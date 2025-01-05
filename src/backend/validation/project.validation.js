const zod = require("zod");

const createProjectValidationSchema = zod.object({
  part: zod
    .string({
      invalid_type_error: "Part must be string",
      required_error: "Part is required",
    })
    .max(30, {
      message: "Part name should not exceed 30 characters.",
    }),

  name: zod
    .string({
      invalid_type_error: "Name must be string",
    })
    .max(20, {
      message: "Name should not exceed 20 characters.",
    })
    .min(1, {
      message: "Name is required",
    }),

  subtitle: zod
    .string({
      invalid_type_error: "Subtitle must be string",
      required_error: "Subtitle is required",
    })
    .max(100, {
      message: "Subtitle should not exceed 100 characters.",
    }),

  version: zod
    .string({
      invalid_type_error: "Version must be string",
      required_error: "Version is required",
    })
    .max(20, {
      message: "Version should not exceed 20 characters",
    }),

  progress: zod
    .number({
      invalid_type_error: "Progress must be a number between 1 and 100",
      required_error: "Progress is required",
    })
    .min(1, {
      message: "Progress should not be less than 1",
    })
    .max(100, {
      message: "Progress should not be greater than 100",
    }),

  headline: zod
    .string({
      invalid_type_error: "Headline must be string",
      required_error: "Headline is required",
    })
    .max(200, {
      message: "Headline should not exceed 200 characters",
    }),

  description: zod
    .array(
      zod.object({
        heading: zod
          .string({
            invalid_type_error: "Heading must be string",
            required_error: "Heading is required",
          })
          .max(100, {
            message: "Heading should not exceed 100 characters.",
          }),

        description: zod.string({
          invalid_type_error: "Description must be string",
          required_error: "Description is required",
        }),

        icon: zod.string({
          invalid_type_error: "Icon must be a string (URL or identifier)",
          required_error: "Icon is required",
        }),

        type: zod.string({
          invalid_type_error: "Type must be string",
          required_error: "Type is required",
        }),
      }),
    )
    .nonempty({
      message: "At least one description item is required.",
    }),

  images: zod
    .array(
      zod.object({
        link: zod.string({
          invalid_type_error: "Link must be a valid URL string",
          required_error: "Image link is required",
        }),

        heading: zod.string({
          invalid_type_error: "Heading must be string",
          required_error: "Heading is required",
        }),

        date: zod.coerce.date({
          invalid_type_error: "Date must be a valid date",
          required_error: "Date is required",
        }),
      }),
    )
    .nonempty({
      message: "At least one image item is required.",
    }),

  link: zod.string({
    invalid_type_error: "Link must be string",
    required_error: "Link is required",
  }),

  startDate: zod.coerce.date({
    invalid_type_error: "Start date must be a date",
  }),

  endDate: zod.coerce.date({
    invalid_type_error: "End date must be a date",
  }),

  groupProject: zod.boolean({
    invalid_type_error: "Group project must be boolean",
    required_error: "Group project is required",
  }),

  teamMembers: zod
    .array(
      zod.string().nonempty({
        message: "Each team member's name must be a non-empty string.",
      }),
    )
    .optional(),

  tags: zod
    .array(
      zod.string().nonempty({
        message: "Tags must be non-empty strings.",
      }),
    )
    .optional(),

  respositories: zod
    .array(
      zod.string().nonempty({
        message: "Each repository link must be a non-empty string.",
      }),
    )
    .nonempty({
      message: "At least one repository link is required.",
    }),

  technologies: zod
    .array(
      zod.string().nonempty({
        message: "Each technology name must be a non-empty string.",
      }),
    )
    .nonempty({
      message: "At least one technology name is required.",
    }),
});

const updateProjectValidationSchema = zod.object({
  part: zod
    .string({
      invalid_type_error: "Part must be string",
    })
    .max(30, {
      message: "Part name should not exceed 30 characters.",
    })
    .optional(),

  name: zod
    .string({
      invalid_type_error: "Name must be string",
    })
    .max(20, {
      message: "Name should not exceed 20 characters.",
    })
    .optional(),

  subtitle: zod
    .string({
      invalid_type_error: "Subtitle must be string",
    })
    .max(100, {
      message: "Subtitle should not exceed 100 characters.",
    })
    .optional(),

  version: zod
    .string({
      invalid_type_error: "Version must be string",
    })
    .max(20, {
      message: "Version should not exceed 20 characters.",
    })
    .optional(),

  progress: zod
    .number({
      invalid_type_error: "Progress must be a number between 1 and 100",
    })
    .min(1, {
      message: "Progress should not be less than 1",
    })
    .max(100, {
      message: "Progress should not be greater than 100",
    })
    .optional(),

  headline: zod
    .string({
      invalid_type_error: "Headline must be string",
    })
    .max(200, {
      message: "Headline should not exceed 200 characters",
    })
    .optional(),

  description: zod
    .array(
      zod.object({
        heading: zod
          .string({
            invalid_type_error: "Heading must be string",
            required_error: "Heading is required",
          })
          .max(100, {
            message: "Heading should not exceed 100 characters.",
          }),

        description: zod.string({
          invalid_type_error: "Description must be string",
          required_error: "Description is required",
        }),

        icon: zod.string({
          invalid_type_error: "Icon must be a string (URL or identifier)",
          required_error: "Icon is required",
        }),

        type: zod.string({
          invalid_type_error: "Type must be string",
          required_error: "Type is required",
        }),
      }),
    )
    .optional(),

  images: zod
    .array(
      zod.object({
        link: zod.string({
          invalid_type_error: "Link must be a valid URL string",
          required_error: "Image link is required",
        }),

        heading: zod.string({
          invalid_type_error: "Heading must be string",
          required_error: "Heading is required",
        }),

        date: zod.coerce.date({
          invalid_type_error: "Date must be a valid date",
          required_error: "Date is required",
        }),
      }),
    )
    .optional(),

  link: zod
    .string({
      invalid_type_error: "Link must be string",
    })
    .optional(),

  startDate: zod.coerce
    .date({
      invalid_type_error: "Start date must be a date",
    })
    .optional(),

  endDate: zod.coerce
    .date({
      invalid_type_error: "End date must be a date",
    })
    .optional(),

  groupProject: zod
    .boolean({
      invalid_type_error: "Group project must be boolean",
    })
    .optional(),

  teamMembers: zod
    .array(
      zod.string().nonempty({
        message: "Each team member's name must be a non-empty string.",
      }),
    )
    .optional(),

  tags: zod
    .array(
      zod.string().nonempty({
        message: "Tags must be non-empty strings.",
      }),
    )
    .optional(),

  respositories: zod
    .array(
      zod.string().nonempty({
        message: "Each repository link must be a non-empty string.",
      }),
    )
    .optional(),

  technologies: zod
    .array(
      zod.string().nonempty({
        message: "Each technology name must be a non-empty string.",
      }),
    )
    .optional(),
});

module.exports = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
