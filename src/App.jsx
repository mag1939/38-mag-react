import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Owner from "./views/Owner";

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">๔๐๔ - Page Not Found 🥵🔥!</h1>
      </div>
    ),
    children: [
      {path: "/", element: <Home />},
      {path: "owner", element: <Owner />},
    ]
  }])

export default function App() {
  return (<RouterProvider router={router} />);
}
