/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        '../../../packages/astro/ui/modules/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
