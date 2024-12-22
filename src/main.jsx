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
    path: "/addService",
    element: <AddService />,
  },
  {
    path: "/myReviews",
    element: <MyReviews />,
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
