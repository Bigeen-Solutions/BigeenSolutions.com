// App-wide constants and configuration
export const SITE_CONFIG = {
    name: 'Bigeen Solutions',
    slogan: 'The Future of Integrated Business Tools',
    description:
        'Transform how you work with intelligent tools designed for tomorrow\'s challenges. Automation, analytics, and scalability in one seamless platform.',
    baseUrl: 'https://www.bigeensolutions.com',
    email: 'hello@bigeensolutions.com',
    formspreeId: 'movwonva', // Update this with your Formspree endpoint
}

export const NAVIGATION = [
    { label: 'Home', href: '/' },
    { label: 'Projects & Roadmap', href: '/projects' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
]

export const SOCIAL_LINKS = {
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    github: '#',
}

export const CTA_BUTTONS = {
    primary: {
        text: 'Get Early Access',
        href: '/contact',
    },
    secondary: {
        text: 'View Roadmap',
        href: '/projects',
    },
    tertiary: {
        text: 'Contact Us',
        href: '/contact',
    },
}

export const EMPTY_STATE_MESSAGES = {
    noProjects: 'No projects available at the moment.',
    noTeamMembers: 'Our team information is being updated.',
    formError: 'Something went wrong. Please try again later.',
    formSuccess: 'Thank you! Your message has been sent successfully.',
}

export const REGEX_PATTERNS = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
    url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
}

export const API_ENDPOINTS = {
    formSubmission: `https://formspree.io/f/${SITE_CONFIG.formspreeId}`,
}

export const ANIMATION_DURATION = {
    fast: 150,
    base: 200,
    slow: 300,
    slower: 500,
}

export const NAVBAR_CONFIG = {
    height: '80px',
    zIndex: 10,
}

export const HERO_CONFIG = {
    minHeight: '100vh',
    paddingTop: '80px',
}
