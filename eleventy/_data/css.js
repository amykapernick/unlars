const sass = require('sass'),
path = require('path')

const compileSass = () => {
	const result = sass.renderSync({
		file: path.join(__dirname, '../src/scss/styles.scss')
	})

	if(!result.css) {
		console.log('Error compiling stylesheet')
		return `/* Error compiling stylesheet */`
	}

	return result.css.toString()
}

module.exports = compileSass()