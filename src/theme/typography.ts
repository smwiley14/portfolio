const mono = '"Sometype Mono", "Courier New", ui-monospace, monospace';

export const typography = {
  fontFamily: mono,
  h1: {
    fontFamily: mono,
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h2: {
    fontFamily: mono,
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.25,
  },
  h3: {
    fontFamily: mono,
    fontSize: '1.15rem',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h5: {
    fontFamily: mono,
    fontSize: '1rem',
    fontWeight: 700,
  },
  body1: {
    fontFamily: mono,
    fontSize: '0.95rem',
    lineHeight: 1.7,
  },
  body2: {
    fontFamily: mono,
    fontSize: '0.85rem',
    lineHeight: 1.6,
  },
  button: {
    fontFamily: mono,
    fontWeight: 600,
    textTransform: 'none' as const,
  },
};
