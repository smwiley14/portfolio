import React from 'react';
import { Box, Typography } from '@mui/material';
import { educationStyles } from '../theme/styles';

const Education = () => {
  return (
    <Box id="education" sx={educationStyles.section}>
      <Box sx={educationStyles.container}>
        <Typography variant="h2" component="h2" sx={educationStyles.heading}>
          Education
        </Typography>
        <Box sx={educationStyles.content}>
          <Typography component="p" variant="body1" sx={{ mb: 1 }}>
            <a href="https://princeton.edu" className="school-link" style={{ color: '#ff6b35', textDecoration: 'none' }}>
              Lehigh University
            </a>, May 2025
          </Typography>
          <Typography component="p" variant="body1">
            B.S. Computer Science <br />
            Minor in Data Science
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
