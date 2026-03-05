import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Code, Launch } from '@mui/icons-material';
import { projectsStyles } from '../theme/styles';
import ReactMarkdown from 'react-markdown';
interface Project {
  title: string;
  description: string;
  urls?: {
    title: string;
    url: string;
    type: 'code' | 'site';
  }[];
}

const projects: Project[] = [
  {
    title: 'Baseball Stats NL2SQL Tool',
    description:
        `I created an NL2SQL query tool for baseball stats. 
        I filled by database using the [Chadwick Bureau baseball data library](https://chadwick.readthedocs.io/en/latest/). 
        I created a Langgraph workflow to generate the SQL queries and execute them.
        I created a knowledge base by storing example SQL queries as well as the results of the queries
        within a vector store in my Postgres database.
        From a given natural language, query, I generate and display the relevant tables with a small summary.
        `,
    urls: [
      { title: 'Code', url: 'https://github.com/smwiley14/Baseball-stats-query-tool', type: 'code' },
      { title: 'Live Site', url: '/baseball', type: 'site' },
    ],
  },
  {
    title: 'Billboard Top 100 Tracker Data Pipeline',
    description:
      `I used Billboard and Spotify's APIs (as well as a couple of others to get details/audio features) 
      to track songs from the Billboard top 100 charts weekly since 2000. 
      I used airflow to to run this pipeline in backfill and fill my database, 
      and ran analytical SQL queries to get insights on the data. 
      I eventually used Streamlit to create a dashboard to visualize the data and Trends`,
    urls: [
      { title: 'Code', url: 'https://github.com/smwiley14/Billboard-charts-analysis', type: 'code' },
      { title: 'Dashboard', url: '/billboard-dashboard', type: 'site' },
    ],
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
              <Typography variant="h3" component="h3" sx={projectsStyles.projectTitle}>
                {project.title}
              </Typography>
              <ReactMarkdown>{project.description}</ReactMarkdown>
              {project.urls && project.urls.length > 0 && (
                <Stack direction="row" spacing={2} sx={projectsStyles.linksContainer}>
                  {project.urls.map((url, urlIndex) => (
                    <Button
                      key={urlIndex}
                      variant="outlined"
                      href={url.url}
                      target={url.url.startsWith('http') ? '_blank' : undefined}
                      rel={url.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      startIcon={url.type === 'code' ? <Code /> : <Launch />}
                      sx={projectsStyles.linkButton}
                    >
                      {url.title}
                    </Button>
                  ))}
                </Stack>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSection;
