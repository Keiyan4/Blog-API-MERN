import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Homepage from "./Home";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // default route
        element: <Homepage />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "blogs/:id",
        element: <BlogDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
