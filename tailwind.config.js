module.exports = {
	content: [
		'./resources/**/*.blade.php',
		'./resources/**/*.ts',
		'./resources/**/*.vue',
        './src/**/*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {},
	},
	plugins: [
        require('tw-elements/dist/plugin')
    ],
}

