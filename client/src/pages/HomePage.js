import React from 'react';
import { Box, Typography, Button, Paper, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChatIcon from '@mui/icons-material/Chat';

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 6, 
          mb: 4, 
          borderRadius: 2, 
          bgcolor: 'primary.main',
          color: 'white',
          backgroundImage: 'linear-gradient(120deg, #3f51b5 0%, #5c6bc0 100%)',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" component="h1" gutterBottom>
              Unlock Your Creative Potential with AI
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.8 }}>
              Generate brilliant content ideas for blogs, videos, and social media using the power of artificial intelligence.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={RouterLink}
              to="/generator"
              startIcon={<AutoAwesomeIcon />}
              sx={{ py: 1.5, px: 4 }}
            >
              Start Generating Ideas
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            {/* Placeholder for illustration */}
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h4">✨ AI Powered ✨</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Features Section */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mt: 8, mb: 4 }}>
        Create Content That Resonates
      </Typography>
      
      <Grid container spacing={4}>
        {/* Blog Post Ideas */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <FormatListBulletedIcon color="primary" sx={{ fontSize: 60 }} />
              </Box>
              <Typography variant="h5" component="h3" gutterBottom align="center">
                Blog Post Ideas
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Generate engaging blog post topics tailored to your industry and audience. Overcome writer's block and create content that drives traffic.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button 
                component={RouterLink} 
                to="/generator" 
                state={{ contentType: 'blog' }}
                variant="outlined"
              >
                Generate Blog Ideas
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        {/* Video Ideas */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <VideoLibraryIcon color="primary" sx={{ fontSize: 60 }} />
              </Box>
              <Typography variant="h5" component="h3" gutterBottom align="center">
                Video Content Ideas
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discover compelling video content concepts that captivate your audience. From educational tutorials to entertaining stories.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button 
                component={RouterLink} 
                to="/generator" 
                state={{ contentType: 'video' }}
                variant="outlined"
              >
                Generate Video Ideas
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        {/* Social Media Ideas */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <ChatIcon color="primary" sx={{ fontSize: 60 }} />
              </Box>
              <Typography variant="h5" component="h3" gutterBottom align="center">
                Social Media Content
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Create scroll-stopping social media content that increases engagement and grows your following across all platforms.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button 
                component={RouterLink} 
                to="/generator" 
                state={{ contentType: 'social' }}
                variant="outlined"
              >
                Generate Social Ideas
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
