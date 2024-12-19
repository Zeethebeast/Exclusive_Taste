// const { fontFamily } = require("tailwindcss/defaultTheme");
// import type { Config } from "tailwindcss";
// import { Poppins } from "next/font/google";

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#F27405',
//         secondary: '#F2C641',
//         tertiary: {
//           dark: '#F27405',
//           light: '#F2C641',
//         },
//       },
//       fontFamily: {
//         poppins: ['var(--font-poppins)', ...fontFamily.sans],
//       },
//     },
//   },
//   plugins: [],
// };







// import type { Config } from "tailwindcss";
// import { Poppins } from "next/font/google";


// const { fontFamily } = require("tailwindcss/defaultTheme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#F27405',
//         secondary: '#F2C641',
//         tertiary: {
//           dark: '#F27405',
//           light: '#F2C641',
//         },
//       },
//       fontFamily: {
//         poppins: ['var(--font-poppins)', ...fontFamily.sans],
//       },
//     },
//   },
//   plugins: [],
// };




// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;


import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F27405", // Custom primary color
        secondary: "#F2C641", // Custom secondary color
        tertiary: {
          dark: "#F27405", // Tertiary dark variant
          light: "#F2C641", // Tertiary light variant
        },
        background: "var(--background)", // Dynamic background color
        foreground: "var(--foreground)", // Dynamic foreground color
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans], // Custom font with fallback
      },
    },
  },
  plugins: [],
} satisfies Config;
