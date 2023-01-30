import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} mb={2}>
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