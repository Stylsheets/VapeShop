const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'my-blueberry': '#000102',
				'my-darkerblue': '#17315C',
				'my-darkblue': '#0A43A1',
				'my-blue': '#026CDA',
				'my-lightblue': '#37A1EC',
				'my-white': '#F5F9F7'
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
