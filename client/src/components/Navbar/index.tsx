import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => (
  <AppBar
    position="static"
    sx={{
      boxShadow: "none",
      height: "64px",
    }}
  >
    <Toolbar
      sx={{
        bgcolor: "secondary.main",
      }}
    >
      <Typography variant="h1">Shopping list</Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar