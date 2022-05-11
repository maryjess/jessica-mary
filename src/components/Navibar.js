import { Stack } from '@mui/material';
import React from 'react';

const Navibar = () => {
  return (
    <div className="navbar">
      <Stack direction="row" spacing={5} alignItems="center">
        <h3 className="navbar-text">Jessica Mary</h3>
        <h3 className="navbar-text">Experiences</h3>
        <h3 className="navbar-text">Projects</h3>
        <h3 className="navbar-text">Blogs</h3>
      </Stack>
    </div>
  )
}

export default Navibar;