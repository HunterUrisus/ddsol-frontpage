/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				intro: ["Intro", "system-ui", "-apple-system", "sans-serif"],
				outfit: ["Outfit", "system-ui", "-apple-system", "sans-serif"],
			},
		},
	},
	plugins: [],
};
