import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

const App = () => {
  useEffect(() => {
    fetch("http://localhost:4000/somepath").then((resp) =>
      console.log(resp.json())
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
