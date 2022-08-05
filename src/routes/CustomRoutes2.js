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

import Welcome from "../components/welcomepage/Welcome";


// !--------------- MERCHANT MOUDULE IMPORTS------------ //
import MerchantSignup from "../MERCHANT_MODULE/pages/auth/Signup"
import Home from '../MERCHANT_MODULE/home/Home';

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
    {
      path: "merchant/home",
      element: <Home/>,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes2;
