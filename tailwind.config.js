/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        "custom-gradient": {
          "0.000%": "rgba(0, 0, 0, 0.8000)",
          "8.333%": "rgba(0, 0, 0, 0.7889)",
          "16.67%": "rgba(0, 0, 0, 0.7556)",
          "25.00%": "rgba(0, 0, 0, 0.7000)",
          "33.33%": "rgba(0, 0, 0, 0.6222)",
          "41.67%": "rgba(0, 0, 0, 0.5222)",
          "50.00%": "rgba(0, 0, 0, 0.4000)",
          "58.33%": "rgba(0, 0, 0, 0.2778)",
          "66.67%": "rgba(0, 0, 0, 0.1778)",
          "75.00%": "rgba(0, 0, 0, 0.1000)",
          "83.33%": "rgba(0, 0, 0, 0.04444)",
          "91.67%": "rgba(0, 0, 0, 0.01111)",
          "100.0%": "rgba(0, 0, 0, 0.000)",
        },
      },
      backgroundImage: (theme2) => ({
        "custom-gradient2":
          "linear-gradient(7deg, rgba(0, 0, 0, 0.8500) 10.00%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6000) 97.00%)",
      }),
      fontFamily: {
        sans: ["Netflix Sans", "sans-serif"],
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [],
});