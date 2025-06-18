import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';

const SavedIdeasPage = () => {
  // State for saved ideas
  const [savedIdeas, setSavedIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [ideaToDelete, setIdeaToDelete] = useState(null);
  
  // Fetch saved ideas on component mount
  useEffect(() => {
    const fetchSavedIdeas = async () => {
      try {
        // This is a placeholder for the actual API call
        // In a real implementation, you would make an API call to your backend
        // const response = await api.get('/api/ideas');
        // setSavedIdeas(response.data.data);
        
        // Simulate API call for demonstration
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock saved ideas
        const mockSavedIdeas = [
          {
            id: '1',
            title: '10 Innovative Content Marketing Strategies for SaaS Companies',
            description: 'Explore cutting-edge content marketing tactics specifically designed for SaaS businesses looking to increase user acquisition and retention.',
            contentType: 'blog',
            keywords: ['SaaS', 'content marketing', 'user acquisition'],
            industry: 'Technology',
            targetAudience: 'SaaS Marketers',
            createdAt: '2025-06-15T10:30:00Z'
          },
          {
            id: '2',
            title: 'How to Create Viral TikTok Content for E-commerce Brands',
            description: 'A step-by-step guide to creating TikTok videos that drive engagement and conversions for online stores.',
            contentType: 'video',
            keywords: ['TikTok', 'e-commerce', 'viral content'],
            industry: 'E-commerce',
            targetAudience: 'Social Media Managers',
            createdAt: '2025-06-16T14:15:00Z'
          },
          {
            id: '3',
            title: 'Instagram Caption Templates for Fitness Professionals',
            description: 'Ready-to-use caption templates that fitness coaches and personal trainers can customize to boost engagement on Instagram.',
            contentType: 'social',
            keywords: ['Instagram', 'fitness', 'captions'],
            industry: 'Health & Fitness',
            targetAudience: 'Fitness Trainers',
            createdAt: '2025-06-17T09:45:00Z'
          }
        ];
        
        setSavedIdeas(mockSavedIdeas);
      } catch (err) {
        console.error('Error fetching saved ideas:', err);
        setError('Failed to load saved ideas. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchSavedIdeas();
  }, []);
  
  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Filter ideas based on search term
  const filteredIdeas = savedIdeas.filter(idea => 
    idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idea.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Handle opening delete confirmation dialog
  const handleOpenDeleteDialog = (idea) => {
    setIdeaToDelete(idea);
    setDeleteDialogOpen(true);
  };
  
  // Handle closing delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setIdeaToDelete(null);
  };
  
  // Handle deleting an idea
  const handleDeleteIdea = async () => {
    if (!ideaToDelete) return;
    
    try {
      // This is a placeholder for the actual API call
      // In a real implementation, you would make an API call to your backend
      // await api.delete(`/api/ideas/${ideaToDelete.id}`);
      
      // Simulate API call for demonstration
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update local state by removing the deleted idea
      setSavedIdeas(prev => prev.filter(idea => idea.id !== ideaToDelete.id));
      
      // Close the dialog
      handleCloseDeleteDialog();
    } catch (err) {
      console.error('Error deleting idea:', err);
      setError('Failed to delete idea. Please try again.');
    }
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Saved Content Ideas
      </Typography>
      
      {/* Search and Filter */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Search Ideas"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Search by title, description, or keywords"
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              <Button startIcon={<FilterListIcon />}>
                Filter
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      {/* Loading, Error, or No Ideas */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      ) : filteredIdeas.length === 0 ? (
        <Alert severity="info" sx={{ my: 2 }}>
          {searchTerm ? 'No ideas match your search.' : 'You have no saved ideas yet. Generate some ideas first!'}
        </Alert>
      ) : (
        /* Saved Ideas List */
        <Grid container spacing={3}>
          {filteredIdeas.map((idea) => (
            <Grid item xs={12} key={idea.id}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="h6" component="h3">
                      {idea.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Saved on {formatDate(idea.createdAt)}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    {idea.description}
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Industry:</strong> {idea.industry || 'Not specified'}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Target Audience:</strong> {idea.targetAudience || 'Not specified'}
                      </Typography>
                    </Grid>
                  </Grid>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
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
                  <Button startIcon={<EditIcon />} size="small">
                    Edit
                  </Button>
                  <Button 
                    startIcon={<DeleteIcon />} 
                    color="error" 
                    size="small"
                    onClick={() => handleOpenDeleteDialog(idea)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
      >
        <DialogTitle>Delete Saved Idea</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete "{ideaToDelete?.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleDeleteIdea} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SavedIdeasPage;
