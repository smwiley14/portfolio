export const experienceStyles = {
  section: {
    py: { xs: 5, md: 6 },
    px: { xs: 3, md: 3 },
    maxWidth: '1000px',
    mx: 'auto',
    backgroundColor: 'background.default',
  },
  heading: {
    fontWeight: 700,
    mb: 3,
  },
  item: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 0.5, sm: 3 },
    mb: 3.5,
    '&:last-child': { mb: 0 },
  },
  date: {
    flexShrink: 0,
    width: { sm: '110px' },
    color: 'text.secondary',
    fontSize: '0.85rem',
    pt: '2px',
  },
  body: {
    flex: 1,
  },
  company: {
    fontWeight: 700,
    fontSize: '1.05rem',
    mb: 0.5,
  },
  role: {
    color: 'text.secondary',
    fontSize: '0.9rem',
    mb: 0.75,
  },
  description: {
    color: 'text.primary',
    fontSize: '0.9rem',
    lineHeight: 1.65,
  },
};
