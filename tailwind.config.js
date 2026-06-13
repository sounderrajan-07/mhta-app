/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "surface": "#fcf9f8",
        "error": "#ba1a1a",
        "tertiary-fixed": "#ffdf9e",
        "on-secondary": "#ffffff",
        "on-error-container": "#93000a",
        "tertiary-container": "#2f2100",
        "charcoal-gray": "#333333",
        "surface-container-lowest": "#ffffff",
        "primary": "#040d23",
        "on-surface-variant": "#45464d",
        "surface-container": "#f0eded",
        "safety-blue": "#007BFF",
        "inverse-primary": "#bdc6e4",
        "inverse-surface": "#313030",
        "surface-container-highest": "#e5e2e1",
        "background": "#fcf9f8",
        "on-primary-fixed": "#121b31",
        "error-container": "#ffdad6",
        "secondary": "#b52619",
        "surface-container-low": "#f6f3f2",
        "tertiary-fixed-dim": "#fabd00",
        "surface-bright": "#fcf9f8",
        "on-tertiary": "#ffffff",
        "surface-variant": "#e5e2e1",
        "surface-container-high": "#eae7e7",
        "tertiary": "#150d00",
        "on-secondary-fixed": "#410000",
        "on-surface": "#1c1b1b",
        "on-background": "#1c1b1b",
        "on-error": "#ffffff",
        "on-tertiary-fixed-variant": "#5b4300",
        "on-secondary-fixed-variant": "#920703",
        "secondary-fixed-dim": "#ffb4a8",
        "on-primary-container": "#818aa6",
        "primary-fixed-dim": "#bdc6e4",
        "outline-variant": "#c6c6ce",
        "primary-fixed": "#dae2ff",
        "secondary-container": "#ff5c47",
        "secondary-fixed": "#ffdad4",
        "outline": "#76777e",
        "inverse-on-surface": "#f3f0ef",
        "surface-tint": "#555e78",
        "on-secondary-container": "#610000",
        "on-tertiary-fixed": "#261a00",
        "steel-bg": "#F4F7F9",
        "on-tertiary-container": "#b08400",
        "safety-yellow": "#FFC107",
        "on-primary-fixed-variant": "#3d465f",
        "on-primary": "#ffffff",
        "surface-dim": "#dcd9d9",
        "primary-container": "#1a233a"
      },
      "animation": {
        "marquee": "marquee 30s linear infinite",
      },
      "keyframes": {
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "container-max": "1280px",
        "stack-sm": "8px",
        "stack-lg": "32px",
        "gutter": "24px",
        "stack-md": "16px"
      },
      "fontFamily": {
        "headline-lg-mobile": ["Hanken Grotesk"],
        "body-lg": ["Inter"],
        "display-lg": ["Hanken Grotesk"],
        "headline-lg": ["Hanken Grotesk"],
        "body-md": ["Inter"],
        "label-md": ["JetBrains Mono"],
        "headline-md": ["Hanken Grotesk"]
      },
      "fontSize": {
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
