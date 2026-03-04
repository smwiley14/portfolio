import { SxProps, Theme } from '@mui/material/styles';

export const skillsStyles = {
  section: {
    py: { xs: 8, md: 12 },
    backgroundColor: 'white',
  },
  title: {
    mb: 8,
    fontWeight: 700,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(3, 1fr)',
    },
    gap: 4,
  },
  card: {
    p: 4,
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  categoryTitle: {
    mb: 3,
    fontWeight: 600,
    color: 'primary.main',
  },
  chipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1.5,
  },
  chip: {
    backgroundColor: 'primary.light',
    color: 'white',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'primary.main',
    },
  },
};
