export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: 'universal',
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: 'static',
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [
			{ rel: 'stylesheet', href: 'https://use.typekit.net/cqy8pjo.css' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon/favicon-16x16.png',
				sizes: '16x16',
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon/favicon-32x32.png',
				sizes: '32x32',
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon/favicon-96x96.png',
				sizes: '96x96',
			},
			{
				rel: 'apple-touch-icon',
				href: '/favicon/apple-icon-57x57.png',
				sizes: '57x57',
			},
			{
				rel: 'apple-touch-icon',
				href: '/favicon/apple-icon-60x60.png',
				sizes: '60x60',
			},
			{
				rel: 'apple-touch-icon',
				href: '/favicon/apple-icon-72x72.png',
				sizes: '72x72',
			},
			{
				rel: 'apple-touch-icon',
				href: '/favicon/apple-icon-76x76.png',
				sizes: '76x76',
			},
			{
				rel: 'apple-touch-icon',
				href: '/favicon/apple-icon-114x114.png',
				sizes: '114x114',
			},
			{
				rel: 'apple-touch-icon',
				href: '/favicon/apple-icon-144x144.png',
				sizes: '144x144',
			},
			{
				rel: 'apple-touch-icon',
				href: '/favicon/apple-icon-152x152.png',
				sizes: '152x152',
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon/android-icon-192x192.png',
				sizes: '192x192',
			},
		],
	},
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [{ src: '~plugins/analytics.js', ssr: false }],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
}
