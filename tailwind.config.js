/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue": "linear-gradient(to bottom, #3B82F6, #1554b9)",
        "gradient-red": "linear-gradient(to bottom, #ef447a, #ce0b5f)",
        "gradient-green": "linear-gradient(to bottom, #10B981, #008a5c)",
        "gradient-black": "linear-gradient(to top left, #000, #4B5563)"
      },
      colors: {
        "black-1": "#344767"
      }
    }
  },
  plugins: []
};

