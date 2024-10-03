/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue": "linear-gradient(to top, #3B82F6, #93C5FD)",
        "gradient-red": "linear-gradient(to top, #EF4444, #FCA5A5)",
        "gradient-green": "linear-gradient(to top, #10B981, #6EE7B7)",
        "gradient-black": "linear-gradient(to top left, #000, #4B5563)"
      },
      colors: {
        "black-1": "#344767"
      }
    }
  },
  plugins: []
};

