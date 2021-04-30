// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    purge: ["./**/*.html", "./**/*.jsx"],
    extend: {
      height: {
        "80vh": "85vh",
      },
      colors: {
        "spartan-gray": "#f2f5fa",
        "primary-color": "#171522",
        "secondary-one": "#f2f5fa",
        "secondary-two": "#14121f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
