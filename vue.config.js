module.exports = {
	outputDir: 'docs',
    css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/styles/_imports.scss";'
			}
		}
	},
};