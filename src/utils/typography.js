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
  },
  "input[type='text']": {
    width: "100%",
    border: "4px solid darkorange",
    padding: "0.5em",
    marginTop: "0.25em"
  },
  "input[type='checkbox']": {
    display: "inline-block",
    margin: "0.3em 0.5em",
    verticalAlign: "top"
  },
  textarea: {
    width: "100%",
    border: "4px solid darkorange",
    padding: "0.5em",
    marginTop: "0.25em"
  },
  button: {
    border: "4px solid orangered",
    padding: "0.5em 1em"
  },
  "button:hover": {
    backgroundColor: "orangered",
    color: "white",
    transition: "all 250ms ease-in-out"
  }
});

const typography = new Typography(elkGlenTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
