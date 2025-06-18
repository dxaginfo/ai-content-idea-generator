const Idea = require('../models/Idea.model');
const { generateContentIdeas } = require('../services/ai.service');

// Generate new content ideas using AI
exports.generateIdeas = async (req, res) => {
  try {
    const { contentType, industry, targetAudience, count = 5 } = req.body;
    
    // Validate required fields
    if (!contentType) {
      return res.status(400).json({ error: 'Content type is required' });
    }
    
    // Call AI service to generate ideas
    const generatedIdeas = await generateContentIdeas(contentType, industry, targetAudience, count);
    
    res.status(200).json({ success: true, data: generatedIdeas });
  } catch (error) {
    console.error('Error generating ideas:', error);
    res.status(500).json({ error: 'Failed to generate ideas' });
  }
};

// Save an idea to the database
exports.saveIdea = async (req, res) => {
  try {
    const { title, description, contentType, keywords, industry, targetAudience } = req.body;
    
    // Validate required fields
    if (!title || !contentType) {
      return res.status(400).json({ error: 'Title and content type are required' });
    }
    
    // Create new idea in database
    const idea = await Idea.create({
      title,
      description,
      contentType,
      keywords,
      industry,
      targetAudience,
      isSaved: true,
      // If authentication is implemented, add user ID here
      // user: req.user.id
    });
    
    res.status(201).json({ success: true, data: idea });
  } catch (error) {
    console.error('Error saving idea:', error);
    res.status(500).json({ error: 'Failed to save idea' });
  }
};

// Get all saved ideas
exports.getSavedIdeas = async (req, res) => {
  try {
    // If authentication is implemented, filter by user
    // const ideas = await Idea.find({ user: req.user.id, isSaved: true });
    const ideas = await Idea.find({ isSaved: true }).sort({ createdAt: -1 });
    
    res.status(200).json({ success: true, count: ideas.length, data: ideas });
  } catch (error) {
    console.error('Error retrieving ideas:', error);
    res.status(500).json({ error: 'Failed to retrieve ideas' });
  }
};

// Delete a saved idea
exports.deleteIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    
    if (!idea) {
      return res.status(404).json({ error: 'Idea not found' });
    }
    
    // If authentication is implemented, check ownership
    // if (idea.user.toString() !== req.user.id) {
    //   return res.status(401).json({ error: 'Not authorized to delete this idea' });
    // }
    
    await idea.remove();
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error('Error deleting idea:', error);
    res.status(500).json({ error: 'Failed to delete idea' });
  }
};
