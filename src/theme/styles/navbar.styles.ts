import { SxProps, Theme } from '@mui/material/styles';

export const navbarStyles = {
  appBar: (scrolled: boolean): SxProps<Theme> => ({
    backgroundColor: scrolled ? 'rgba(242, 237, 228, 0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(8px)' : 'none',
    borderBottom: scrolled ? '1px solid' : '1px solid transparent',
    borderColor: scrolled ? 'divider' : 'transparent',
    boxShadow: 'none',
    color: 'text.primary',
    transition: 'all 0.25s ease-in-out',
  }),
  toolbar: {
    justifyContent: 'space-between',
    maxWidth: '1000px',
    width: '100%',
    mx: 'auto',
    px: { xs: 2, md: 3 },
  },
  logo: {
    fontFamily: '"Sometype Mono", monospace',
    fontSize: '1.05rem',
    fontWeight: 700,
    cursor: 'pointer',
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    px: 1.25,
    py: 0.5,
    borderRadius: 1,
    lineHeight: 1.3,
    '&:hover': { opacity: 0.85 },
  },
  navButtons: {
    display: { xs: 'none', md: 'flex' },
    gap: 0.5,
  },
  navButton: {
    color: 'text.primary',
    fontWeight: 500,
    fontSize: '0.9rem',
    px: 1.5,
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
    },
  },
};
