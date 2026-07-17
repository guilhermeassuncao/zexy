/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "40rem",
      md: "48.75rem",
      lg: "64rem",
      xl: "80rem"
    },
    extend: {
      colors: {
        cyan: "#5cf5db",
        green: "#66f859",
        orange: "#f8b659",
        pink: "#f859a8",
        purple: "#7359f8",
        red: "#f87359",
        yellow: "#f8f859",
        blue: "#4da3ff",
        black: "#22212c",
        white: "#f8f8f2",
        lilac: "#8b82c4",
        gray: "#282a36",
        "gray-light": "#44475a",
        "gray-lightests": "#5b5f75",
        "news-heading": "#ff7a5c",
        "price-green": "#00a443",
        "body-start": "#2a2835",
        "body-mid": "#22212c",
        "body-end": "#17161f",
        "header-start": "#24222f",
        "header-mid": "#1d1c26",
        "header-end": "#13121a",
        zx: {
          bg: "#06070c",
          surface: "#0c0e16",
          raised: "#12141f",
          line: "#1e2130",
          ink: "#f4f5fa",
          muted: "#9aa0b8",
          accent: "#8b74ff",
          "accent-soft": "#b3a5ff",
          ps: "#4d9fff",
          "ps-deep": "#0d2547",
          xb: "#3fdc81",
          "xb-deep": "#0c3323",
          nt: "#ff5a5f",
          "nt-deep": "#3a1114"
        }
      },
      boxShadow: {
        header: "0 0.0625rem 0 rgba(255, 255, 255, 0.04), 0 0.375rem 1.125rem rgba(0, 0, 0, 0.35)",
        panel: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.45)"
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "sans-serif"],
        orbitron: ["\"Trebuchet MS\"", "Verdana", "\"Segoe UI\"", "sans-serif"],
        display: ["\"Space Grotesk\"", "system-ui", "-apple-system", "\"Segoe UI\"", "sans-serif"],
        logo: ["\"Baloo 2\"", "\"Space Grotesk\"", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "site-gradient": "linear-gradient(180deg, #2a2835 0%, #22212c 36%, #17161f 100%)",
        "header-gradient": "linear-gradient(135deg, #24222f 0%, #1d1c26 52%, #13121a 100%)",
        "panel-gradient": "linear-gradient(180deg, #24222f 0%, #1d1c26 100%)"
      }
    }
  },
  plugins: []
};
