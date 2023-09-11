/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(-90deg) translateX(0)',
					},
					'50%': {
						transform: 'rotate(-90deg) translateX(10%)',
					},
				},
			},
			animation: {
				wiggle: 'wiggle 1.5s ease-in-out infinite',
			},
		},
		fontFamily: {
			'oswold-font': ['Oswald', 'sans-serif'],
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
