import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <LightbulbIcon sx={{ mr: 1 }} />
          <Typography 
            variant="h6" 
            component={RouterLink} 
            to="/"
            sx={{ 
              textDecoration: 'none', 
              color: 'inherit',
              fontWeight: 'bold'
            }}
          >
            AI Content Idea Generator
          </Typography>
        </Box>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/generator">
          Generate Ideas
        </Button>
        <Button color="inherit" component={RouterLink} to="/saved">
          Saved Ideas
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
