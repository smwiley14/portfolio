import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { heroStyles } from '../theme/styles';
import {LinkedIn, GitHub, Description} from '@mui/icons-material';
const Hero = () => {
  return (
    <Box id="hero" sx={heroStyles.container}>
      <Container maxWidth="md">
        <Typography component="h1" sx={heroStyles.name}>
          Sam Wiley
        </Typography>
        {/* <Typography component="p" sx={heroStyles.tagline}>
          Based out of NYC.
        </Typography> */}
        <Box sx={heroStyles.linksContainer}>
          <Button
            variant="outlined"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={heroStyles.link}
          >
            <LinkedIn />
            Linked in
          </Button>
          <Button
            variant="outlined"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={heroStyles.link}
          >
            
            <Description />
            Resume
          </Button>
          <Button
            variant="outlined"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={heroStyles.link}
          >
            <GitHub />
            GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
