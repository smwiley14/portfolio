import React from 'react';
import { Box, Typography } from '@mui/material';
import { aboutStyles } from '../theme/styles';

const About = () => {
  return (
    <Box id="about" sx={aboutStyles.section}>
      <Box sx={aboutStyles.container}>
        <Typography variant="h2" component="h2" sx={aboutStyles.heading}>
          Me
        </Typography>
        <Box sx={aboutStyles.content}>
          <Typography component="p" variant="body1" sx={{ mb: 2 }}>
            Full Stack Software Engineer.
          </Typography>
          <Typography component="p" variant="body1" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default About;
