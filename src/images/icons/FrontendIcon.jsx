import React from 'react';

const FrontendIcon = ({ className = '', stroke = 'currentColor' }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FrontendIcon; 