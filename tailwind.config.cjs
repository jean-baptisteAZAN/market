/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		colors: {
			primary: '#f87c24',
			secondary: '#339252'
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto Slab', 'Arial'],
				Abel: ['Abel', 'sans-serif']
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};

module.exports = config;
