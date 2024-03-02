import { Stack } from '@mui/material';
import React from 'react';

const Projects = () => {
  return (
    <Stack spacing={1}>
      <div className="card-header__works works">
        <h1 className="card-title">Projects</h1>
      </div>  
      <Stack direction="row" spacing={5}>
        <div className="card-background">
          <div className="para">
            My name is Jessica, a penultimate student in National University of Singapore, 
            majoring in <strong>Pharmaceutical Science</strong> with a minor in <strong>Computer Science</strong>. 
            I love exploring new things and I am really passionate about music.
          </div>
        </div>
        <div className="card-background">
          <div className="para">
            My name is Jessica, a penultimate student in National University of Singapore, 
            majoring in <strong>Pharmaceutical Science</strong> with a minor in <strong>Computer Science</strong>. 
            I love exploring new things and I am really passionate about music.
          </div>
        </div>
      </Stack>
    </Stack>
  );
}

export default Projects;