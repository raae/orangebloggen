import Typography from "typography";
import elkGlenTheme from "typography-theme-elk-glen";

elkGlenTheme.overrideThemeStyles = () => ({
  a: {
    color: "currentColor",
    textShadow: "none",
    backgroundImage: "none",
    textDecoration: "underline",
    transition: "color 250ms ease-in-out"
  },
  "a:hover": {
    color: "orangered !important"
  },
  img: {
    transition: "filter 250ms ease-in-out"
  },
  figcaption: {
    textAlign: "center",
    fontSize: "80%",
    marginTop: "0.25em"
  },
  "a:hover img": {
    filter: "brightness(1.2)"
  }
});

const typography = new Typography(elkGlenTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
