/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        morph: "morph 5s infinite",
        fadeIn: "fadeIn 2s",
        fadeInRight: "fadeInRight 2s",
        fadeInLeft: "fadeInLeft 2s",
        fadeInUp: "fadeInUp 2s",
      },
      keyframes: {
        morph: {
          "0%": { borderRadius: "50% 40% 30% 70%/60% 30% 30% 40%" },
          "50%": { borderRadius: "20% 60% 80% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "50% 40% 30% 70%/60% 30% 70% 40%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
