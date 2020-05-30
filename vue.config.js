module.exports = {
	outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production'
		? './'
		: '/',
    css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/styles/_imports.scss";'
			}
		}
	},
};