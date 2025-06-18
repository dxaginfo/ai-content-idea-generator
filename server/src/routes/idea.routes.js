const express = require('express');
const router = express.Router();
const { 
  generateIdeas, 
  saveIdea, 
  getSavedIdeas, 
  deleteIdea 
} = require('../controllers/idea.controller');

// Generate new ideas using AI
router.post('/generate', generateIdeas);

// Save an idea to database
router.post('/', saveIdea);

// Get all saved ideas
router.get('/', getSavedIdeas);

// Delete a saved idea
router.delete('/:id', deleteIdea);

module.exports = router;
