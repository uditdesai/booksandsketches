// Util function to convert px values into rem for better dev-design collaboration
const rem = (px) => `${px / 16}rem`

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "600px",
      sm: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1440px",
      xxxl: "2600px",
    },
    fontFamily: {
      "sans-serif": ["Inter", "sans-serif"],
    },
    fontSize: {
      12: rem(12),
      14: rem(14),
      16: rem(16),
      18: rem(18),
      24: rem(24),
      32: rem(32),
      36: rem(36),
      48: rem(48),
    },
    extend: {
      maxWidth: {
        xxs: "18rem",
        xxxs: "15rem",
      },
      width: {
        140: "35rem",
        "fit-content": "fit-content",
      },
      inset: {
        "29.5%": "29.5%",
      },
      aspectRatio: {
        "240/340": "240 / 340",
      },
    },
  },
  plugins: [],
}
