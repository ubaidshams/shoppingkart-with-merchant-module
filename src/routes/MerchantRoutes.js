import React from 'react'
import { useRoutes } from "react-router";


import PageNotFound from "../pages/PageNotFound"
import MerchantHome from '../MERCHANT_MODULE/home/Home';

import MerchantDefaultPage from "../MERCHANT_MODULE/pages/MerchantDefaultPage"
import AddProduct from "../MERCHANT_MODULE/pages/product/AddProduct";
import ViewProducts from "../MERCHANT_MODULE/pages/product/ViewProducts";
import EditProduct from '../MERCHANT_MODULE/pages/product/EditProduct';

const MerchantRoutes = () => {


  let myRoutes = useRoutes([
    {
      path: "",
      element: < MerchantHome />,
      children: [
        {
          path: "/",
          element: <MerchantDefaultPage />
        },
        {
          path: "add-product",
          element: <AddProduct />,
        },

        {
          path: "view-products",
          element: <ViewProducts />,
        },
        {
          path: "edit-product/:id",
          element: <EditProduct />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]
    },


  ]);
  return myRoutes;
}

export default MerchantRoutes

