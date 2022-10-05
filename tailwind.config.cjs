/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'slide-left': {
					'0%': {transform: 'translateX(0)'},
					'100%': {transform: 'translateX(-10%)'},
				},
				'slide-right': {
					'0%': {transform: 'translateX(0)'},
					'100%': {transform: 'translateX(10%)'},
				},
			},
		},
		fontFamily: {
			'oswold-font': ['Oswald', 'sans-serif'],
		},
	},
	plugins: [],
};
