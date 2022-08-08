import React from "react";
import { useRoutes } from "react-router";
import Home from "../MERCHANT_MODULE/home/Home";
import Addproduct from "../MERCHANT_MODULE/pages/products/Addproduct";
import ViewProducts from "../MERCHANT_MODULE/pages/products/ViewProducts";

const MerchantRoute = () => {
  let myMerchantRoutes = useRoutes([
    {
      path: "/merchant/home",
      element: <Home />,
      children: [
        {
          path: "add-product",
          element: <Addproduct />,
        },
        {
          path: "view-products",
          element: <ViewProducts />,
        },
      ],
    },
  ]);
  return myMerchantRoutes;
};

export default MerchantRoute;
