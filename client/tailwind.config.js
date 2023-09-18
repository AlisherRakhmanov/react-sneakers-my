/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'light-blue': '#E7F6FF',
			white: colors.white,
			black: colors.black,
			gray: {
				100: '#C4C4C4',
				200: '#9D9D9D',
				300: '#BDBDBD',
				400: '#9B9B9B',
				500: '#C8C8C8',
				600: '#F3F3F3'
			},
			transparent: colors.transparent
		},

		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem'
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '200ms'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			},
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				'2lg': '1.38rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			}
		}
	},
	plugins: []
};
