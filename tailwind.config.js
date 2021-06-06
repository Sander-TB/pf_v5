module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			mono: ["hack", "ui-monospace"],
			sans: ["Forma DJR Banner", "Open Sans", "sans-serif"],
		},
		colors: {
			orange: "#fd8b25",
			green: "#00bdaa",
			white: "#eceff4",
			bluegray: "#7f8da8",
			darkblue: "#3b4252",
			black: "#2e3440",
			lightgray: "#D8DEE9",
			"black-t-90": "rgba(46, 52, 64, 0.95)",
			"black-t-70": "rgba(46, 52, 64, 0.7)",
		},
		extend: {
			spacing: {
				"95vh": "95vh",
				90: "90%",
				95: "95%",
				82: "82%",
				85: "85%",
				100: "100px",
				15: "3.75rem",
				"50ch": "50ch",
				"60ch": "60ch",
				"75ch": "75ch",
			},
			fontSize: {
				"20xl": "20rem",
				"10xl": "12rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
