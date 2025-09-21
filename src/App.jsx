import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout.jsx";
import CountryDetails from "./components/Layout/CountryDetails.jsx";

import "./App.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Country from "./pages/Country.jsx";
import Contact from "./pages/Contact.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",         // ✅ default child route
        element: <Home />
      },
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> },
       {
        path: "country/:id",
        element: <CountryDetails />,
      },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
