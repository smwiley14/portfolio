import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import { Hero, About, Education, ProjectSection } from './components/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Hero />
        <About />
        <Education />
        <ProjectSection />
      </Box>
    </ThemeProvider>
  );
}

export default App;
