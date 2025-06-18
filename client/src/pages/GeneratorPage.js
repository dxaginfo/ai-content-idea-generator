import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  Alert,
  Snackbar,
  Chip,
  Stack,
  Divider
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const GeneratorPage = () => {
  const location = useLocation();
  const initialContentType = location.state?.contentType || 'blog';
  
  // Form state
  const [formData, setFormData] = useState({
    contentType: initialContentType,
    industry: '',
    targetAudience: '',
    count: 5
  });
  
  // Ideas state
  const [generatedIdeas, setGeneratedIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // This is a placeholder for the actual API call
      // In a real implementation, you would make an API call to your backend
      // const response = await api.post('/api/ideas/generate', formData);
      // setGeneratedIdeas(response.data.data);
      
      // Simulate API call for demonstration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response data
      const mockIdeas = [
        {
          title: `Top 10 Trends in ${formData.industry || 'Your Industry'} for 2025`,
          description: `A comprehensive analysis of emerging trends in ${formData.industry || 'your industry'} that will shape the market in 2025.`,
          contentType: formData.contentType,
          keywords: ['trends', '2025', formData.industry || 'industry', 'analysis'],
          isSaved: false
        },
        {
          title: `How to Engage ${formData.targetAudience || 'Your Audience'} Through Compelling Content`,
          description: `Strategies and tactics to create content that resonates with ${formData.targetAudience || 'your target audience'} and drives engagement.`,
          contentType: formData.contentType,
          keywords: ['engagement', 'content strategy', formData.targetAudience || 'audience'],
          isSaved: false
        },
        {
          title: `The Ultimate Guide to Content Creation for ${formData.industry || 'Your Business'}`,
          description: `A step-by-step guide to creating high-quality content that attracts and converts ${formData.targetAudience || 'customers'} in the ${formData.industry || 'your industry'} space.`,
          contentType: formData.contentType,
          keywords: ['guide', 'content creation', formData.industry || 'business'],
          isSaved: false
        },
        {
          title: `5 Case Studies: Success Stories in ${formData.industry || 'Your Field'}`,
          description: `Analyze real-world examples of successful content strategies in the ${formData.industry || 'your industry'} and what you can learn from them.`,
          contentType: formData.contentType,
          keywords: ['case studies', 'success stories', formData.industry || 'field'],
          isSaved: false
        },
        {
          title: `The Future of ${formData.industry || 'Your Industry'}: Predictions and Insights`,
          description: `Expert predictions and insights about where ${formData.industry || 'your industry'} is headed and how to stay ahead of the curve.`,
          contentType: formData.contentType,
          keywords: ['future', 'predictions', formData.industry || 'industry', 'insights'],
          isSaved: false
        }
      ];
      
      setGeneratedIdeas(mockIdeas);
    } catch (err) {
      console.error('Error generating ideas:', err);
      setError('Failed to generate ideas. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Handle saving an idea
  const handleSaveIdea = async (idea) => {
    try {
      // This is a placeholder for the actual API call
      // In a real implementation, you would make an API call to your backend
      // await api.post('/api/ideas', idea);
      
      // Simulate API call for demonstration
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update the local state to mark the idea as saved
      setGeneratedIdeas(prev => 
        prev.map(item => 
          item.title === idea.title ? { ...item, isSaved: true } : item
        )
      );
      
      setSuccessMessage('Idea saved successfully!');
    } catch (err) {
      console.error('Error saving idea:', err);
      setError('Failed to save idea. Please try again.');
    }
  };
  
  // Handle generating new ideas
  const handleRegenerateIdeas = () => {
    handleSubmit({ preventDefault: () => {} });
  };
  
  // Close success message
  const handleCloseSuccessMessage = () => {
    setSuccessMessage(null);
  };
  
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Generate Content Ideas
      </Typography>
      
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="content-type-label">Content Type</InputLabel>
                  <Select
                    labelId="content-type-label"
                    name="contentType"
                    value={formData.contentType}
                    onChange={handleChange}
                    label="Content Type"
                    required
                  >
                    <MenuItem value="blog">Blog Posts</MenuItem>
                    <MenuItem value="video">Video Content</MenuItem>
                    <MenuItem value="social">Social Media Posts</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Industry/Niche"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g., Technology, Health, Finance"
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Target Audience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="e.g., Professionals, Parents, Students"
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="count-label">Number of Ideas</InputLabel>
                  <Select
                    labelId="count-label"
                    name="count"
                    value={formData.count}
                    onChange={handleChange}
                    label="Number of Ideas"
                  >
                    <MenuItem value={3}>3 Ideas</MenuItem>
                    <MenuItem value={5}>5 Ideas</MenuItem>
                    <MenuItem value={10}>10 Ideas</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} /> : null}
                >
                  {loading ? 'Generating...' : 'Generate Ideas'}
                </Button>
              </Grid>
            </Grid>
          </form>
          
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </CardContent>
      </Card>
      
      {/* Generated Ideas */}
      {generatedIdeas.length > 0 && (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" component="h2">
              Generated Ideas
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AutorenewIcon />}
              onClick={handleRegenerateIdeas}
              disabled={loading}
            >
              Regenerate
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {generatedIdeas.map((idea, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {idea.title}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {idea.description}
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Stack direction="row" spacing={1}>
                      <Chip 
                        label={idea.contentType === 'blog' ? 'Blog Post' : 
                              idea.contentType === 'video' ? 'Video Content' : 'Social Media'} 
                        color="primary" 
                        size="small" 
                      />
                      {idea.keywords?.map((keyword, i) => (
                        <Chip key={i} label={keyword} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button
                      startIcon={idea.isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                      onClick={() => handleSaveIdea(idea)}
                      color={idea.isSaved ? 'success' : 'primary'}
                      disabled={idea.isSaved}
                    >
                      {idea.isSaved ? 'Saved' : 'Save Idea'}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={handleCloseSuccessMessage}
        message={successMessage}
      />
    </Box>
  );
};

export default GeneratorPage;
