/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{ts,tsx}",
		"./public/**/*.html",
	],
	plugins: [
		require("daisyui")
	],
	darkMode: "class",
	theme: {},
};