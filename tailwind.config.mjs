/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: 'white',
			secondary: 'black'
		},
		screens: {
			xs: '320px',
			sm: '475px',
			md: '768px',
			lg: '992px',
			xlg: '1200px',
			'2xl': '1440px'
		}
	},
	plugins: [],
}