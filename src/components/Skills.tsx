import React from 'react';
import { Box, Container, Typography, Chip, Paper } from '@mui/material';
import { skillsStyles } from '../theme/styles/skills.styles';

const Skills = () => {
  const skillCategories =   [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI', 'Next.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Figma'],
    },
  ];

  return (
    <Box id="skills" sx={skillsStyles.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" sx={skillsStyles.title}>
          Skills & Technologies
        </Typography>
        <Box sx={skillsStyles.grid}>
          {skillCategories.map((category, index) => (
            <Paper key={index} elevation={2} sx={skillsStyles.card}>
              <Typography variant="h5" component="h3" sx={skillsStyles.categoryTitle}>
                {category.category}
              </Typography>
              <Box sx={skillsStyles.chipsContainer}>
                {category.skills.map((skill, skillIndex) => (
                  <Chip key={skillIndex} label={skill} sx={skillsStyles.chip} />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
