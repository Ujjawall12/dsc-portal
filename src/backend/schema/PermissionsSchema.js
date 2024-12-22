const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: [
        'admin',
        'teamLead',
        'subLead',
        'member',
        'participant',
        'oldMember',
      ],
      required: true,
    },
    permissions: {
      // ? Array of arrays with three elements each (permission, collection, field)
      // ? Example: [['read', 'participants', 'name'], ['write', 'participants', 'email'], ['delete', 'participants', 'phone'], ['update', 'participants', 'address']]
      // ? This means that the role has read permission on the name field of the participants collection, write permission on the email field, delete permission on the phone field, and update permission on the address field
      // abhi shaayad use na ho par for making it future proof
      type: [[String]],
      validate: {
        validator: function (v) {
          return v.every((arr) => arr.length >= 2);
        },
        message: (props) =>
          `${props.value} is not an array of arrays with two elements each!`,
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Permission = mongoose.model('Permission', permissionSchema);

module.exports = Permission;
