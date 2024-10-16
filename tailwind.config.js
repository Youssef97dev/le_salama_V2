/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--brown-100)", // Replace with your primary color
        primary_tr: "var(--brown-trensparant)",
        primary_9: "var(--brown-90)",
        primary_8: "var(--brown-80)",
        primary_7: "var(--brown-70)",
        primary_6: "var(--brown-60)",
        primary_5: "var(--brown-50)",
        primary_4: "var(--brown-40)",
        primary_3: "var(--brown-30)",
        primary_2: "var(--brown-20)",
        primary_1: "var(--brown-10)",

        secondary: "var(--blue-100)",
        secondary_9: "var(--blue-90)",
        secondary_8: "var(--blue-80)",
        secondary_7: "var(--blue-70)",
        secondary_6: "var(--blue-60)",
        secondary_5: "var(--blue-50)",
        secondary_4: "var(--blue-40)",
        secondary_3: "var(--blue-30)",
        secondary_2: "var(--blue-20)",
        secondary_1: "var(--blue-10)",
      },
      perspective: {
        300: "300px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backfaceVisibility: ["hidden"],
    },
  },
  plugins: [],
};
