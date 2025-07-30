/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
        '../../../packages/astro/ui/modules/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'astro-blue': '#ff3e00',
                'astro-purple': '#7c3aed',
            },
            fontFamily: {
                astro: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
