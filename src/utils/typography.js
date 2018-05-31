import Typography from "typography";
import elkGlenTheme from "typography-theme-elk-glen";

elkGlenTheme.overrideThemeStyles = () => ({
  a: {
    color: "currentColor",
    textShadow: "none",
    backgroundImage: "none",
    textDecoration: "underline",
    transition: "all 250ms ease-in-out"
  },
  "a:hover": {
    color: "orangered !important"
  },
  "a.gatsby-resp-image-link:hover": {
    filter: "brightness(1.2)"
  }
});

const typography = new Typography(elkGlenTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
