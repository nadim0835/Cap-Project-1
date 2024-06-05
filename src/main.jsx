import React from "react";
import ReactDOM from "react-dom/client";
import About from "./Components/About.jsx";
import "./index.css";
import RootLayout from "./RootLayout.jsx";
import Product from "./Components/Product.jsx";
import Error from "./Components/Error.jsx";
import Home from "./Pages/Home";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Aboutroute from "./Pages/Aboutroute.jsx";
import ServiseRoute from "./Pages/ServiseRoute.jsx";
import ServiceDetailsroute from "./Pages/ServiceDetailsroute.jsx";
import Teamroute from "./Pages/Teamroute.jsx";
import TeamDetailsroute from "./Pages/TeamDetailsroute.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<Aboutroute />} />
      <Route path="/service" element={<ServiseRoute />} />
      <Route path="/servicdetails" element={<ServiceDetailsroute />} />
      <Route path="/team" element={<Teamroute />} />
      <Route path="/teamdetails" element={<TeamDetailsroute />} />
      

      <Route path="/product/:productid" element={<Product />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
