import React from 'react';
import { Box, Typography } from '@mui/material';
import { aboutStyles } from '../theme/styles';
import { useReveal } from '../hooks/useReveal';
import Marker from './Marker';

const About = () => {
  const ref = useReveal();
  return (
    <Box id="about" ref={ref} className="reveal" sx={aboutStyles.section}>
      <Typography variant="h2" component="h2" sx={aboutStyles.heading}>
        About me
      </Typography>
      <Box sx={aboutStyles.content}>
        <Typography component="p" variant="body1">
          I'm a <Marker color="yellow">full stack software engineer</Marker> with
          a passion for building <Marker color="blue">web applications</Marker>,{' '}
          <Marker color="pink">data pipelines</Marker>, and automation services.
          I'm from and currently living in New York City. Outside of work I love
          sports (baseball, basketball, and football), skiing, golfing, cooking,
          and dogs.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
