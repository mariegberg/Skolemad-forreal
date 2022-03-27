module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { max: "360px" },
      // => @media (min-width: 360px) { ... }

      tablet: { max: "640px" },
      // => @media (min-width: 640px) { ... }

      laptop: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      desktop: { min: "1025px" },
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        green: {
          bg: "#B4CF66",
          button: "#839C3A",
          hover: "#77902A",
        },
        blue: {
          bg: "#96A3EE",
        },
        red: {
          bg: "#FC7252",
        },
        yellow: {
          detail: "FFFF55",
        },
      },
      fontFamily: {
        yrsa: ["yrsa", "serif"],
        worksans: ["work sans", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
