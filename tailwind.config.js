/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		screens: {
			dark: { raw: '(prefers-color-scheme: dark)' },
			light: { raw: '(prefers-color-scheme: light)' },
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			transparent: 'transparent',
			primary: {
				100: 'var(--primary-100)',
				200: 'var(--primary-200)',
			},
			secondary: {
				100: 'var(--secondary-100)',
				200: 'var(--secondary-200)',
				300: 'var(--secondary-300)',
			},
			gradient: {
				100: 'var(--gradient-100)',
				200: 'var(--gradient-200)',
			},
			text: 'var(--text-color)',
			light: 'var(--light)',
			dark: 'var(--dark)',
			alt: {
				100: 'var(--alt-100)',
				200: 'var(--alt-200)',
			},
			highlight: {
				default: 'var(--highlight)',
				alt: 'var(--highlight--alt)',
			},
		},
		fontFamily: {
			display: ['degular-display', 'sans-serif'],
			body: ['degular-text', 'sans-serif'],
		},
		borderColor: (theme) => ({
			...theme('colors'),
			default: theme('colors.alt.100', 'currentColor'),
		}),
		borderWidth: {
			default: '1px',
			0: '0',
			2: '2px',
			4: '4px',
		},
		borderRadius: {
			none: '0',
			default: 'var(--border-radius)',
			full: '100%',
		},
		letterSpacing: {
			less: '0rem',
			default: '0.03rem',
			wide: '0.0625rem',
			wider: '0.3rem',
		},

		extend: {
			fontSize: {
				xs: '0.5625rem',
				sm: '0.875rem',
				base: '1.125rem',
				big: '1.5rem',
				lg: '2.25rem',
				xl: '4.5rem',
				'2xl': '6rem',
			},
			spacing: {
				9: '2.25rem',
			},
		},
	},
	variants: {},
	plugins: [],
	purge: {
		// Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
		],
	},
}
