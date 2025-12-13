// Theme constants for consistent design system
// 2024/2025 SaaS Design Trends - Deep Navy + Electric Purple/Teal
export const COLORS = {
  // Primary - Deep Navy/Midnight Blue (Trust & Tech)
  primary: {
    navy: '#0A1628',        // Midnight Blue
    navyLight: '#15253F',   // Lighter navy for hover states
    navyDark: '#050B14',    // Deeper navy for depth
  },

  // Accent - Electric Purple/Neon (Future & Integration)
  accent: {
    purple: '#8B5CF6',      // Electric Purple
    purpleLight: '#A78BFA', // Light purple for hover
    purpleDark: '#7C3AED',  // Deep purple
    teal: '#14B8A6',        // Teal accent
    tealLight: '#2DD4BF',   // Light teal
  },

  // Neutral
  white: '#FFFFFF',
  offWhite: '#F8FAFC',      // Clean off-white background
  black: '#000000',
  gray: {
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

  // Text
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  textLight: 'rgba(255, 255, 255, 0.9)',
  textLightMuted: 'rgba(255, 255, 255, 0.7)',

  // Borders & Backgrounds
  border: 'rgba(255, 255, 255, 0.1)',
  borderLight: '#E2E8F0',
  borderDark: 'rgba(139, 92, 246, 0.2)',

  // Glassmorphism
  glass: {
    light: 'rgba(255, 255, 255, 0.05)',
    medium: 'rgba(255, 255, 255, 0.1)',
    strong: 'rgba(255, 255, 255, 0.15)',
    dark: 'rgba(10, 22, 40, 0.8)',
  },

  // Status
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
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
  // Font families - Modern SaaS Typography (Inter/DM Sans style)
  fontFamily: {
    base: '"Inter", "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: '"Space Grotesk", "Inter", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  // Font sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    snug: 1.375,
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
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  // Glow effects for accent elements
  glowPurple: '0 0 30px rgba(139, 92, 246, 0.3)',
  glowTeal: '0 0 30px rgba(20, 184, 166, 0.3)',
}

export const ANIMATIONS = {
  // Transition durations
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  // Easing functions
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
}

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #0A1628 0%, #15253F 100%)',
  accent: 'linear-gradient(135deg, #8B5CF6 0%, #14B8A6 100%)',
  hero: 'linear-gradient(180deg, #0A1628 0%, rgba(10, 22, 40, 0.95) 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
}

export const BORDER_RADIUS = {
  sm: '0.375rem',
  base: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
}


export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  base: '200ms ease-in-out',
  slow: '300ms ease-in-out',
  slower: '500ms ease-in-out',
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
