// AI service to interact with OpenAI API
const { OpenAI } = require('openai');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate content ideas using OpenAI
 * @param {string} contentType - Type of content (blog, video, social)
 * @param {string} industry - Target industry
 * @param {string} targetAudience - Target audience
 * @param {number} count - Number of ideas to generate
 * @returns {Promise<Array>} - Array of generated ideas
 */
exports.generateContentIdeas = async (contentType, industry, targetAudience, count = 5) => {
  try {
    // Build prompt based on content type and other parameters
    const promptMap = {
      blog: `Generate ${count} blog post ideas`,
      video: `Generate ${count} video content ideas`,
      social: `Generate ${count} social media post ideas`,
    };
    
    let prompt = promptMap[contentType] || `Generate ${count} content ideas`;
    
    // Add industry and audience context if provided
    if (industry) {
      prompt += ` for the ${industry} industry`;
    }
    
    if (targetAudience) {
      prompt += ` targeting ${targetAudience}`;
    }
    
    prompt += `. For each idea, provide a compelling title and a brief description. Format as a JSON array with 'title' and 'description' fields.`;
    
    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a creative content strategist specialized in generating engaging content ideas." },
        { role: "user", content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 1000,
      response_format: { type: "json_object" },
    });
    
    // Parse response and extract ideas
    const responseContent = response.choices[0].message.content;
    const parsedResponse = JSON.parse(responseContent);
    
    // Ensure the response has an ideas array
    const ideas = parsedResponse.ideas || [];
    
    // Map to standardized format
    return ideas.map(idea => ({
      title: idea.title,
      description: idea.description,
      contentType,
      keywords: idea.keywords || [],
      industry,
      targetAudience,
      isSaved: false,
    }));
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};
