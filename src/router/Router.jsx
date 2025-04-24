import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
