const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the idea'],
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    contentType: {
      type: String,
      enum: ['blog', 'video', 'social'],
      required: [true, 'Please specify the content type'],
    },
    keywords: [{
      type: String,
      trim: true,
    }],
    industry: {
      type: String,
      trim: true,
    },
    targetAudience: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    isSaved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Idea', IdeaSchema);
