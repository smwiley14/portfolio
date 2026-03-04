import { SxProps, Theme } from '@mui/material/styles';

export const projectsStyles = {
  section: {
    py: { xs: 4, md: 6 },
    backgroundColor: 'background.default',
    maxWidth: '1200px',
    mx: 'auto',
    px: { xs: 3, md: 6 },
  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 2, md: 6 },
    alignItems: 'flex-start',
  },
  heading: {
    fontFamily: '"Brush Script MT", "Brush Script Std", "cursive"',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 400,
    minWidth: { md: '200px' },
    textAlign: { xs: 'left', md: 'left' },
  },
  content: {
    fontFamily: '"Courier New", "Monaco", "monospace"',
    fontSize: '1rem',
    lineHeight: 1.8,
    flex: 1,
  },
  project: {
    mb: 3,
    '&:last-child': {
      mb: 0,
    },
  },
  projectLink: {
    color: '#2ecc71', // green accent
    textDecoration: 'none',
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};
