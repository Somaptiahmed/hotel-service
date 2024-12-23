import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from "./pages/Home.jsx";



import AuthLayout from "./layout/AuthLayout.jsx";
import Footer from "./components/Footer.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner.jsx";

import ErrorPage from "./pages/ErrorPage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import AddService from "./pages/AddService.jsx";
import MyReviews from "./pages/MyReviews.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import MyService from "./pages/MyService.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/banner",
    element: <Banner />,
  },
 
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login", 
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>

      },
    ]
  },

  
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/addService",
    element: <AddService />,
  },
  {
    path: "/serviceDetail",
    element: <ServiceDetails></ServiceDetails>,
  },
  {
    path: "/myReviews",
    element: <MyReviews />,
  },
  {
    path: "/myService",
    element: <MyService />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "*", // This wildcard path catches all undefined routes
    element: <ErrorPage />, // Show the ErrorPage for unknown routes
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
      
      {/* Add ToastContainer here */}
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
