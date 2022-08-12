import React from "react";
import { useRoutes } from "react-router";

import Signup from "../pages/auth/users/Signup";

import Forget from "../pages/auth/users/Forget";
import Maincategory from "../components/categories/Maincategory";
import Kids from "../components/categories/Kids";
import Women from "../components/categories/Women";
import Menpage from "../components/categories/Menpage";
import Electronics from "../components/categories/Electronics";
import Beauty from "../components/categories/Beauty";

import Wishlist from "../pages/wishlist/Wishlist";
import Profile from "./../pages/profile/Profile";
import Reset from "../pages/auth/users/Reset";
import Order from "../pages/profile/Order";
import Home from "../pages/home/Home.jsx"
import PageNotFound  from "../pages/PageNotFound"
import Welcome from "../components/welcomepage/Welcome";

=======
import MerchantSignup from "../MERCHANT_MODULE/pages/auth/MerchantSignup";
import Dashboard from '../MERCHANT_MODULE/home/Home';
import ProtectedRoute from "../helper/ProtectedRoutes";
import MerchantRoutes from "./MerchantRoutes";

// !--------------- MERCHANT MOUDULE IMPORTS------------ //
const CustomRoutes2 = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Welcome />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot",
      element: <Forget />,
    },
    {
      path: "merchant-signup",
      element: <MerchantSignup />,
    },
    // {
    //   path: "merchant/home",
    //   element: <Home/>,
    // },
  ]);
  return myRoutes;
};

export default CustomRoutes2;
