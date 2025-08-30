/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F6F1EB",
        smokyplum: "#4E3B4F",
        sage: "#A8B7A6",
        sagedeep: "#7E9284",
        blush: "#E7B7C9",
        lavender: "#C9B7DD",
        gold: "#C8A26A",
        ink: "#2A2329",
        white: "#FFFFFF"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.15)",
        lift: "0 14px 40px -16px rgba(0,0,0,0.2)"
      },
      container: { center: true, padding: "1.25rem" },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(14px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
      },
      animation: { fadeUp: "fadeUp .6s ease-out both" }
    },
  },
=======
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { extend: {} },
>>>>>>> 511f9e7dd9c143dea6aaac2bc7368ac93b7fddfb
  plugins: [],
};
