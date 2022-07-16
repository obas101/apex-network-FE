/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				primaryColor: "#FB8E0B",
				primaryColorLight: "#ffaa49",
				secondaryColor: "",
				bgSecColor: "#F8F8FA",
				textColor: "#FD6003",
				secTextColor: "#383A47",
			},
			backgroundImage: {
				"hero-card": "url('/src/assets/Card.svg')",
			},
		},
	},
	plugins: [],
};
