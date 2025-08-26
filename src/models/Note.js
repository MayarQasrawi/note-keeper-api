const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
} 
// , { versionKey: false }
);

// Create text index for search functionality based on title and content
// noteSchema.index({ title: 'text', content: 'text' });

// Creates a Mongoose model called Note based on noteSchema.
module.exports = mongoose.model('Note', noteSchema);