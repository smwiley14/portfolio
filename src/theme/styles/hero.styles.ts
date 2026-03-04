import { SxProps, Theme } from '@mui/material/styles';

export const heroStyles = {
  container: {
    minHeight: 'auto',
    py: { xs: 6, md: 8 },
    backgroundColor: 'background.default',
    textAlign: 'center' as const,
  },
  name: {
    fontFamily: '"Brush Script MT", "Brush Script Std"',
    fontSize: { xs: '3rem', md: '5rem' },
    fontWeight: 400,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    mb: 2,
  },
  tagline: {
    fontFamily: '"Brush Script MT", "Brush Script Std", "cursive"',
    fontSize: { xs: '1.2rem', md: '1.5rem' },
    fontWeight: 400,
    mb: 3,
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
    flexWrap: 'wrap',
    mb: 6,
  },
  link: {
    fontFamily: '"Brush Script MT", "Brush Script Std", "cursive"',
    fontSize: '1rem',
    fontWeight: 400,
    border: '1px solid',
    borderColor: 'text.primary',
    borderRadius: 0,
    px: 3,
    py: 1,
    textTransform: 'none',
    color: 'text.primary',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'text.primary',
      color: 'background.default',
    },
  },
};
