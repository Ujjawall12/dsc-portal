// abac - attribute based access control
// subject, action, resource, context

// database - User, Projects
const permissions = {
  Projects: {
    action: 'read' | 'create' | 'update' | 'delete',
  },
};

const roles = {
  admin: {
    Projects: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },

  faculty: {
    Projects: {
      read: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  teamLead: {
    Projects: {
      read: true,
      create: (project) => {
        return project.groupProject;
      },
      update: (user, project) => {
        return user.id === project.userId;
      },
      delete: (user, project) => {
        return user.id === project.userId;
      },
    },
  },
  subLead: {
    Projects: {
      read: true,
      create: true,
      update: (user, project) => {
        return user.id === project.userId;
      },
      delete: (user, project) => {
        return user.id === project.userId;
      },
    },
  },
  member: {
    Projects: {
      read: true,
      create: true,
      update: (user, project) => {
        return user.id === project.userId;
      },
      delete: (user, project) => {
        return user.id === project.userId;
      },
    },
  },
  participant: {
    Projects: {
      read: true,
      create: false,
      update: false,
      delete: false,
    },
  },
};
