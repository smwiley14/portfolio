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
    fontFamily: '"Caveat", cursive',
    fontSize: { xs: '2rem', md: '3rem' },
    fontWeight: 600,
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
    mb: 4,
    '&:last-child': {
      mb: 0,
    },
  },
  projectTitle: {
    fontFamily: '"Caveat", cursive',
    fontSize: { xs: '1.25rem', md: '1.5rem' },
    fontWeight: 600,
    mb: 1.5,
    color: 'text.primary',
  },
  description: {
    fontFamily: '"Courier New", "Monaco", "monospace"',
    fontSize: '1rem',
    lineHeight: 1.8,
    mb: 2,
    color: 'text.secondary',
  },
  linksContainer: {
    mt: 2,
    flexWrap: 'wrap',
  },
  linkButton: {
    fontFamily: '"Caveat", cursive',
    fontSize: '1.1rem',
    color: '#2ecc71',
    borderColor: '#2ecc71',
    '&:hover': {
      borderColor: '#27ae60',
      backgroundColor: 'rgba(46, 204, 113, 0.1)',
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
