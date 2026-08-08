import React from 'react';
import { Box, Typography } from '@mui/material';
import { aboutStyles } from '../theme/styles';
import { useReveal } from '../hooks/useReveal';
// import Marker from './Marker';

const About = () => {
  const ref = useReveal();
  return (
    <Box id="about" ref={ref} className="reveal" sx={aboutStyles.section}>
      <Typography variant="h2" component="h2" sx={aboutStyles.heading}>
        About me
      </Typography>
      <Box sx={aboutStyles.content}>
        <Typography component="p" variant="body1">
        I'm a full-stack engineer who enjoys the full range of the stack: everything from provisioning cloud infrastructure to building the interface someone actually clicks on.
        I love building out complex systems and data pipelines, and trying new technologies along the way.
        New York City based. When I'm not building things, I'm probably watching baseball, out on a golf course, skiing or cooking.
        Currently looking for work, so if you like what you see, feel free to reach out!        </Typography>
      </Box>
    </Box>
  );
};

export default About;
