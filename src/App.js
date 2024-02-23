import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import GlobalStyle from "./styles/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostListPage />,
  },
]);

function App() {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
