/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './apps/**/src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
        './packages/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'brand': {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    900: '#0c4a6e',
                },
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
        },
    },
    plugins: [],
}; 