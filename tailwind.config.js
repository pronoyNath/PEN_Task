export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans"], 
         itc: ["ITC", "sans-serif"],
      },
    },
  },
  plugins: [],
  optimizeDeps: {
    include: ["swiper/react", "swiper/modules"],
  },
}
