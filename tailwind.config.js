module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			orange: "#fd8b25",
			green: "#00bdaa",
			white: "#eceff4",
			bluegray: "#7f8da8",
			darkblue: "#3b4252",
			black: "#2e3440",
		},
		extend: {
			spacing: {
				"90": "90%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
