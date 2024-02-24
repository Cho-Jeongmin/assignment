import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
