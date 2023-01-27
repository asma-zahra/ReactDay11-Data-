import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header";
import { FooterComponent } from "./Components/Footer";
import "../index.css";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Body from "./Components/Body"
import Error from "./Components/Error";
import RestaurantMenu from "./Components/ReastaurantMenu";
import Profile from "./Components/Profile";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet/>
      <FooterComponent/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>,
        children:[{
          path:"profile",
          element:<Profile/>

        }]
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu/>
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
