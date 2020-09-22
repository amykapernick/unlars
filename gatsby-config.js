module.exports = {
	siteMetadata: {
		title: 'UnLars',
		description: 'Like Unsplash, but for Lars',
		siteUrl: 'https://www.unlars.cloud'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-sass`,
			options: {
			  implementation: require("sass"),
			},
		},
	]
}