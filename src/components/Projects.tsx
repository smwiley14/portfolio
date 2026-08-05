import React from 'react';
import { Box, Typography, Button, Stack, Paper, Chip } from '@mui/material';
import { Code, Launch } from '@mui/icons-material';
import { projectsStyles } from '../theme/styles';
import ReactMarkdown from 'react-markdown';
import { useReveal } from '../hooks/useReveal';

interface Project {
  title: string;
  description: string;
  urls?: {
    title: string;
    url: string;
    type: 'code' | 'site';
  }[];
  stack: string[];
}

const projects: Project[] = [
  {
    title: 'Baseball Stats NL2SQL Tool',
    description: `I created an NL2SQL query tool for baseball stats. I filled my database using the [Chadwick Bureau baseball data library](https://chadwick.readthedocs.io/en/latest/), then built a LangGraph workflow to generate and execute SQL queries. I created a knowledge base by storing example queries and their results in a vector store within my Postgres database. From a natural-language query, it generates and displays the relevant tables with a short summary.`,
    stack: ['Python', 'React.js', 'Langchain', 'Langgraph', 'PostgreSQL', 'Docker Compose', 'Agentic Frameworks'],
    urls: [
      { title: 'Code', url: 'https://github.com/smwiley14/Baseball-stats-query-tool', type: 'code' },
      { title: 'Live Site', url: 'https://batgpt.samwiley-stuff.com', type: 'site' },
    ],
  },
  {
    title: 'Billboard Top 100 Tracker Data Pipeline',
    description: `I used the Billboard and Spotify APIs (plus a few others for details and audio features) to track songs from the Billboard Top 100 charts weekly since 2000. I used Airflow to backfill and run the pipeline, ran analytical SQL queries to get insights on the data, and built a Streamlit dashboard to visualize the data and trends.`,
    stack: ['Python', 'Airflow', 'Pandas', 'PostgreSQL', 'Streamlit', 'ETL'],
    urls: [
      { title: 'Code', url: 'https://github.com/smwiley14/Billboard-charts-analysis', type: 'code' },
      { title: 'Dashboard', url: 'https://billboard.samwiley-stuff.com', type: 'site' },
    ],
  },
  {
    title: 'Synonymism',
    description: 'A vocabulary-based daily trivia game built on a Neo4j graph database with a React front end.',
    stack: ['Python', 'Neo4j (Graph Database)', 'React.js'],
    urls: [
      { title: 'Code', url: 'https://github.com/smwiley14/Syonym-game', type: 'code' },
      { title: 'Play', url: 'https://synonymism.samwiley-stuff.com', type: 'site' },
    ],
  },
];

const ProjectSection = () => {
  const ref = useReveal();
  return (
    <Box id="projects" ref={ref} className="reveal" sx={projectsStyles.section}>
      <Box sx={projectsStyles.inner}>
        <Typography variant="h2" component="h2" sx={projectsStyles.heading}>
          Personal projects
        </Typography>
        <Box sx={projectsStyles.grid}>
          {projects.map((project, index) => (
            <Paper key={index} sx={projectsStyles.project}>
              <Typography variant="h3" component="h3" sx={projectsStyles.projectTitle}>
                {project.title}
              </Typography>
              <Box sx={projectsStyles.description}>
                <ReactMarkdown>{project.description}</ReactMarkdown>
              </Box>
              <Box sx={projectsStyles.stackContainer}>
                {project.stack.map((tech, techIndex) => (
                  <Chip key={techIndex} label={tech} sx={projectsStyles.stackChip} />
                ))}
              </Box>
              {project.urls && project.urls.length > 0 && (
                <Stack direction="row" spacing={1.5} sx={projectsStyles.linksContainer}>
                  {project.urls.map((url, urlIndex) => (
                    <Button
                      key={urlIndex}
                      variant="outlined"
                      size="small"
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
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSection;
