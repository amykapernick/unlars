module.exports = (eleventyConfig) => {
	// Dev Config
	eleventyConfig.addWatchTarget('./src/scss/');

	// Static Files
	eleventyConfig.addPassthroughCopy({'src/img': 'img'})
	eleventyConfig.addPassthroughCopy({'src/fonts': 'fonts'})
}