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
            I'm a full stack software engineer with a passion for building web applications, data pipelines and automation services.
            I'm from and currently living in New York City.
            I love sports (baseball, basketball and football), skiing, golfing, cooking and dogs!
            
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default About;
