/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
	important: false,
	content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
	],
	theme: {
		extend: {
			colors: {
				primary: "#000"
			}
		},
	},
	plugins: [],
}

