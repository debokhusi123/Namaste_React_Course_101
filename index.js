/**
 *
 * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algorithm - made with C++
 * MINIFY
 * BUNDLING
 * Cleaning our code
 * DEV and production Build
 * Super fast building algorithm
 * does image optimization also
 * Caching while development
 * Compresses
 * Compatible with older version of browser
 * HTTPS in dev
 * port Number
 * Consistent hashin algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code.
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
import BodyComponent from "./src/components/BodyComponent";
import FooterComponent from "./src/components/FooterComponent";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import ErrorComponent from "./src/components/ErrorComponent";
import AboutComponent from "./src/components/AboutComponent";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";





const AppLayout = () => {
  return (
    <div className="app_root">
      <HeaderComponent />
      <Outlet/>
      <FooterComponent />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorComponent />,
      children: [
        {
          path: "/about",
          element: <AboutComponent />,
        },
        {
          path: "/",
          element: <BodyComponent />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/login",
          element: <Login />,
        }
      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

