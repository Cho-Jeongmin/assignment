import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import PostDetailPage from "./pages/PostDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    element: <PostDetailPage />,
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
