/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'morph': 'morph 5s infinite', // Name your animation
      },
      keyframes: {
        morph: {
          '0%': { 'borderRadius': '50% 40% 30% 70%/60% 30% 30% 40%' },
          '50%': { 'borderRadius': '20% 60% 80% 40%/50% 60% 30% 60%' },
          '100%': { 'borderRadius': '50% 40% 30% 70%/60% 30% 70% 40%' },
        },
      },
    },
  },
  plugins: [],
}

