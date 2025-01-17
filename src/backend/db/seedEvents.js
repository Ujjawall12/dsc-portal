// backend/scripts/seedEvents.js
const mongoose = require("mongoose");
const Event = require("../schema/event.schema");

const sampleEvents = [
  {
    images: [
      {
        link: "https://picsum.photos/800/600",
        alt: "React Workshop",
      },
    ],
    name: "React Advanced Workshop",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-01-15"),
    duration: {
      start: new Date("2024-01-15T10:00:00"),
      end: new Date("2024-01-15T12:00:00"),
    },
    mode: "online",
    onlineLink: "https://meet.google.com/example",
    simpleDescription:
      "Deep dive into advanced React concepts and best practices",
    description: [
      {
        content:
          "Join us for an intensive workshop covering React hooks, performance optimization, and state management.",
      },
    ],
  },
  {
    images: [
      {
        link: "https://picsum.photos/800/600",
        alt: "Node.js Workshop",
      },
    ],
    name: "Node.js Backend Development",
    startDate: new Date("2024-02-20"),
    endDate: new Date("2024-02-20"),
    duration: {
      start: new Date("2024-02-20T14:00:00"),
      end: new Date("2024-02-20T16:00:00"),
    },
    mode: "mixed",
    onlineLink: "https://zoom.us/example",
    simpleDescription: "Learn to build scalable backends with Node.js",
    description: [
      {
        content:
          "Comprehensive workshop on Node.js, Express, and MongoDB integration.",
      },
    ],
  },
  {
    images: [
      {
        link: "https://picsum.photos/800/600",
        alt: "DevOps Meetup",
      },
    ],
    name: "DevOps Best Practices Meetup",
    startDate: new Date("2024-03-10"),
    endDate: new Date("2024-03-10"),
    duration: {
      start: new Date("2024-03-10T15:00:00"),
      end: new Date("2024-03-10T17:00:00"),
    },
    mode: "offline",
    simpleDescription: "Learn about CI/CD pipelines and deployment strategies",
    description: [
      {
        content:
          "Join us for an interactive session on modern DevOps practices and tools.",
      },
    ],
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/your_database_name");

    // Clear existing events
    await Event.deleteMany({});

    // Insert sample events
    await Event.insertMany(sampleEvents);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
