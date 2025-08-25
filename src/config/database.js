
// Imports Mongoose, which is the ODM (Object Data Modeling) library for MongoDB in Node.js.
// Mongoose lets you define schemas and interact with MongoDB using JS objects.

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    // immediately stops the Node.js app because without a database, the API cannot work properly.
    process.exit(1);
  }
};

module.exports = connectDB;

