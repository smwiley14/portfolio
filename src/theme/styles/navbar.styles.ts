import { SxProps, Theme } from '@mui/material/styles';

export const navbarStyles = {
  appBar: (scrolled: boolean): SxProps<Theme> => ({
    backgroundColor: scrolled ? 'rgba(25, 118, 210, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? 2 : 0,
    transition: 'all 0.3s ease-in-out',
  }),
  toolbar: {
    justifyContent: 'space-between',
    px: { xs: 2, md: 6 },
  },
  logo: {
    fontWeight: 700,
    cursor: 'pointer',
    '&:hover': { opacity: 0.8 },
  },
  navButtons: {
    display: { xs: 'none', md: 'flex' },
    gap: 3,
  },
};
