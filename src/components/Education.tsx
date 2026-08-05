import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { educationStyles } from '../theme/styles';
import { useReveal } from '../hooks/useReveal';

const Education = () => {
  const ref = useReveal();
  return (
    <Box id="education" ref={ref} className="reveal" sx={educationStyles.section}>
      <Typography variant="h2" component="h2" sx={educationStyles.heading}>
        Education
      </Typography>
      <Box sx={educationStyles.item}>
        <Box sx={educationStyles.date}>May 2025</Box>
        <Box sx={educationStyles.body}>
          <Typography component="h3" sx={educationStyles.school}>
            <Link
              href="https://www.lehigh.edu"
              target="_blank"
              rel="noopener noreferrer"
              sx={educationStyles.schoolLink}
            >
              Lehigh University
            </Link>
          </Typography>
          <Typography component="p" sx={educationStyles.degree}>
            B.S. Computer Science
            <br />
            Minor in Data Science
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
