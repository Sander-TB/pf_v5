module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			mono: ["hack", "ui-monospace"],
			sans: ["Forma DJR Banner", "Open Sans"],
		},
		colors: {
			orange: "#fd8b25",
			green: "#00bdaa",
			white: "#eceff4",
			bluegray: "#7f8da8",
			darkblue: "#3b4252",
			black: "#2e3440",
			"black-t-90": "rgba(46, 52, 64, 0.95)",
			"black-t-70": "rgba(46, 52, 64, 0.7)",
		},
		extend: {
			spacing: {
				"90": "90%",
				"100": "100px",
				"15": "3.75rem",
				"50ch": "50ch",
				"75ch": "75ch",
			},
			fontSize: {
				"20xl": "20rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
