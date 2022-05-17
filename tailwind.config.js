module.exports = {
  content: ["./src/**/*.{html,js}"],
  //...
  daisyui: {
    themes: [
      {
        blogtheme: {
          primary: "red",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  //...
  plugins: [require("daisyui")],
}