import React from 'react';

type MarkerColor = 'yellow' | 'blue' | 'pink' | 'green';

interface MarkerProps {
  children: React.ReactNode;
  color?: MarkerColor;
}

/** Highlighter-style emphasis: a colored marker band behind the text. */
const Marker = ({ children, color = 'yellow' }: MarkerProps) => (
  <span className={`marker marker-${color}`}>{children}</span>
);

export default Marker;
