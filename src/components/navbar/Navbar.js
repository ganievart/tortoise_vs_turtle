import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}} mb={ 2 }>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tortoise vs Turtle
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}