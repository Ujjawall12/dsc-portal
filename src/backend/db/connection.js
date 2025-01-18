const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});
dotenv.config({
  path: './secrets.env',
});

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside environment variables'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function dbConnection(dbName) {
  if (cached.conn) return cached.conn;

  try {
    cached.promise =
      cached.promise ||
      mongoose
        .connect(MONGODB_URI, {
          dbName,
        })
        .then((mongoose) => {
          console.log('Connected to MongoDB to database', dbName);
          return mongoose;
        });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
  return cached.conn ? cached.conn : await cached.promise;
}

module.exports = dbConnection;
