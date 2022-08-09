/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"camo.githubusercontent.com", 
			"github-readme-stats.vercel.app",
			"pxe.vercel.app"
		],
	},
}

module.exports = nextConfig;
