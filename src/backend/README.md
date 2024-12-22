# Task

- [ ] - Implement ABAC (Attribute Based Access Control) in the backend.

# Permissions

## Roles and Permissions

### Admin

- Projects: read, create, update, delete

### Faculty

- Projects: read

### Team Lead

- Projects:
  - read
  - create: allowed if `project.groupProject` is true
  - update: allowed if `user.id === project.userId`
  - delete: allowed if `user.id === project.userId`

### Sub Lead

- Projects:
  - read
  - create
  - update: allowed if `user.id === project.userId`
  - delete: allowed if `user.id === project.userId`

### Member

- Projects:
  - read
  - create
  - update: allowed if `user.id === project.userId`
  - delete: allowed if `user.id === project.userId`

### Participant

- Projects: read
