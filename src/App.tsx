import React from 'react';
import { ThemeProvider, CssBaseline, Box, Divider, Container } from '@mui/material';
import { theme } from './theme';
import {
  NavBar,
  Hero,
  About,
  ProjectSection,
  WorkExperience,
  Education,
  Contact,
} from './components/index';

const SectionRule = () => (
  <Container maxWidth={false} sx={{ maxWidth: '1000px', px: { xs: 3, md: 3 } }}>
    <Divider />
  </Container>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <NavBar />
        <Hero />
        <SectionRule />
        <About />
        <SectionRule />
        <ProjectSection />
        <SectionRule />
        <WorkExperience />
        <SectionRule />
        <Education />
        <SectionRule />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
