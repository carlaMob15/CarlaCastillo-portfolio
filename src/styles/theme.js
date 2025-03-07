const theme = {
  colors: {
    primary: {
      50: '#EEEEFF',
      100: '#E0E0FF',
      200: '#C5C3FF',
      300: '#A7A4FF',
      400: '#8783FF',
      500: '#5F59F7', // Main primary color
      600: '#4B45E6',
      700: '#3832D4',
      800: '#2A25B3',
      900: '#1C1892',
    },
    secondary: {
      50: '#FFF5F5',
      100: '#FFE0E0',
      200: '#FFC5C5',
      300: '#FFA7A7',
      400: '#FF8787',
      500: '#FF5959',
      600: '#E64545',
      700: '#D43232',
      800: '#B32525',
      900: '#921C1C',
    },
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  fonts: {
    primary: "'Poppins', sans-serif",
  },
  animation: {
    easing: {
      easeOut: [0.4, 0, 0.2, 1],
      easeIn: [0.4, 0, 1, 1],
      easeInOut: [0.4, 0, 0.2, 1],
    },
    duration: {
      fast: 0.15,
      normal: 0.3,
      slow: 0.5,
    },
  },
}

module.exports = theme 