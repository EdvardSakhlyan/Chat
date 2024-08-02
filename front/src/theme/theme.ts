import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      powderWhite: string;
      persianGreen: string;
      lightBlue: string;
      onyx: string;
      mainbackground: string;
      secondaryContent: string;
      primaryContent: string;
    };
    fonts: string[];
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    mainbackground: "#432f6e",
    secondaryContent: "#a38ed1",
    primaryContent: "#c9b0ff",
  },
  fonts: ["sans-serif", "Roboto"],
  spacing: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  fontSize: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },
};

export default theme;
