import React from 'react';
import { Box, Typography } from '@mui/material';
import { projectsStyles } from '../theme/styles';

interface Project {
  title: string;
  description: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: 'Example Project 1',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: '#',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: '#',
  },
];

const ProjectSection = () => {
  return (
    <Box id="projects" sx={projectsStyles.section}>
      <Box sx={projectsStyles.container}>
        <Typography variant="h2" component="h2" sx={projectsStyles.heading}>
          Projects
        </Typography>
        <Box sx={projectsStyles.content}>
          {projects.map((project, index) => (
            <Box key={index} sx={projectsStyles.project}>
              <Typography component="p" variant="body1">
                <a
                  href={project.url}
                  style={{ color: '#2ecc71', textDecoration: 'none', fontWeight: 600 }}
                >
                  {project.title}
                </a>
                {', '}
                {project.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSection;
