import React from 'react';
import { Box, Typography } from '@mui/material';
import { experienceStyles } from '../theme/styles';
import { useReveal } from '../hooks/useReveal';

interface Experience {
  date: string;
  company: string;
  role: string;
  description: string;
}

// TODO(sam): Replace these placeholders with your real roles / internships.
const experiences: Experience[] = [
  {
    date: 'Jun 2024 - Aug 2024',
    company: 'Omega Black',
    role: 'Software Engineering Intern',
    description:
      `
  Delivered an iOS cybersecurity alert app using Flutter (Eventually refactored to react native) with Cloud Firestore integration, deployed to TestFlight for beta testing and early user feedback.
  Designed and deployed a RESTful API serving cybersecurity intelligence from PostgreSQL, hosted on Azure App Services.
  Developed a React + TypeScript application leveraging OpenAI API to summarize reports, reducing time spent on manual document review.
`,
  },
  {
    date: 'Jun 2025 - Dec 2025',
    company: 'Omega Black',
    role: 'Full Stack Developer',
    description:
  `
  Built a partner-facing API with MCP (Model Context Protocol) integration via Claude, enabling structured data exchange and laying the foundation for AI-augmented analytics workflows.
  Automated infrastructure provisioning using Terraform across AWS and Elastic Cloud, reducing manual deployment effort and increasing reliability for production services.
  Developed a new React + TypeScript internal data portal to visualize operational metrics and cybersecurity intelligence, improving internal access to real time insights.
  Designed and built automated report-generation workflows for cybersecurity analysts, reducing manual reporting effort by eliminating repetitive data compilation tasks and enabling analysts to focus on higher-value work.
 `
 ,
  },
];

const WorkExperience = () => {
  const ref = useReveal();
  return (
    <Box id="experience" ref={ref} className="reveal" sx={experienceStyles.section}>
      <Typography variant="h2" component="h2" sx={experienceStyles.heading}>
        Work experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={experienceStyles.item}>
          <Box sx={experienceStyles.date}>{exp.date}</Box>
          <Box sx={experienceStyles.body}>
            <Typography component="h3" sx={experienceStyles.company}>
              {exp.company}
            </Typography>
            <Typography component="p" sx={experienceStyles.role}>
              {exp.role}
            </Typography>
            <Typography component="p" sx={experienceStyles.description}>
              {exp.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WorkExperience;
