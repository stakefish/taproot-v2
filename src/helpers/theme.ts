const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1.5, // rem
    mediaQuery: "only screen",
    container: {
      sm: 0, // rem
      md: 64, // rem
      lg: 68, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 80.3, // em
    },
  },
  font: {
    base: "'DM Sans', sans-serif",
    headings: "'Monument', sans-serif",
  },
  fontSize: {
    base: 16,
    lead: 18,
    h1: 53,
    h2: 38,
    h3: 22,
    h4: 18,
    h5: 16,
  },
  fontWeight: {
    light: 200,
    base: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  colors: {
    primary: "#31be37",
    secondary: "#0F0F0F",
    tertiary: "#3F5FBF",
    dark: "#252628",
    accent: "#fdebd1",
    gray: "#777b84",
    black: "#0F0F0F",
    white: "#ffffff",
    odd: "#f7f7f7",
    background: "#0f0f0f"
  },
  transition: {
    base: "0.3s ease",
  },
};

export default theme
