import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: blue[800], // A nice, professional shade of blue
        },
        secondary: {
            main: '#f50057', // A secondary color for contrast if needed
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        // You can define other typography styles as needed
    },
    components: {
        // You can customize component styles here
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, // A slightly more rounded button for a modern feel
                    textTransform: 'none', // Buttons will use regular case, not UPPERCASE
                },
            },
        },
    },
});

export default theme;