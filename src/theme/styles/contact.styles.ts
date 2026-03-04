import { SxProps, Theme } from '@mui/material/styles';

export const contactStyles = {
  section: {
    py: { xs: 8, md: 12 },
    backgroundColor: 'white',
  },
  title: {
    mb: 2,
    fontWeight: 700,
  },
  description: {
    mb: 6,
    maxWidth: '600px',
    mx: 'auto',
    fontSize: '1.1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
    },
    gap: 4,
  },
  paper: {
    p: 4,
    height: '100%',
  },
  paperTitle: {
    mb: 3,
    fontWeight: 600,
  },
  socialButton: {
    justifyContent: 'flex-start',
    py: 1.5,
    textTransform: 'none',
  },
  submitButton: {
    py: 1.5,
  },
};
