/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://cinematv-96f27fc02fc9.herokuapp.com/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:3000/public/static/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
