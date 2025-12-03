// Theme constants for consistent design system
export const COLORS = {
  // Primary
  primary: {
    dark: 'rgba(42, 13, 91, 1)',
    darker: 'rgba(11, 15, 43, 1)',
    light: 'rgba(42, 13, 91, 0.8)',
  },

  // Neutral
  white: '#FFFFFF',
  black: '#000000',
  light: '#f8f9fa',
  lighter: '#f5f5f5',

  // Text
  textDark: '#1a1a1a',
  textMuted: 'rgba(255, 255, 255, 0.7)',
  textMutedStrong: 'rgba(0, 0, 0, 0.8)',

  // Borders & Backgrounds
  border: 'rgba(255, 255, 255, 0.1)',
  borderLight: '#e9ecef',
  backgroundGlass: 'rgba(255, 255, 255, 0.05)',
  backgroundGlassActive: 'rgba(255, 255, 255, 0.1)',

  // Status
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
}

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  section: '5rem',
}

export const TYPOGRAPHY = {
  // Font families
  fontFamily: {
    base: '"Segoe UI", "Helvetica Neue", sans-serif',
    mono: '"SFMono-Regular", "Consolas", "Liberation Mono", monospace',
  },

  // Font sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
}

export const BREAKPOINTS = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
}

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
}

export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  base: '200ms ease-in-out',
  slow: '300ms ease-in-out',
  slower: '500ms ease-in-out',
}

export const BORDER_RADIUS = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
}

export const GRADIENT = {
  primary: `linear-gradient(
    135deg,
    ${COLORS.primary.dark} 0%,
    ${COLORS.primary.darker} 100%
  )`,
  overlay: `linear-gradient(
    135deg,
    rgba(42, 13, 91, 0.95) 0%,
    rgba(11, 15, 43, 0.95) 100%
  )`,
}
