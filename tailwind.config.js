/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./public/**/*.html",
	],
	plugins: [
		require("daisyui")
	],
	darkMode: "class",
	theme: {},
};