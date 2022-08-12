import React from 'react'
import { useRoutes } from "react-router";


import PageNotFound from "../pages/PageNotFound"
import MerchantHome from '../MERCHANT_MODULE/home/Home';

import AddProduct from "../MERCHANT_MODULE/pages/product/AddProduct";
import ViewProducts from "../MERCHANT_MODULE/pages/product/ViewProducts";
import MerchantDefaultPage from "../MERCHANT_MODULE/pages/MerchantDefaultPage"

const MerchantRoutes = () => {
  

    let myRoutes = useRoutes([
        {
          path: "",  
          element: < MerchantHome/>,
          children :[
            {path:"/",
            element:<MerchantDefaultPage/>},
            {
                path: "add-product",
                element: <AddProduct />,
            },
            
        {
            path: "view-products",
            element: <ViewProducts />,
        },
        {
            path:"*",
            element:<PageNotFound/>
        }
          ]
        }, 
       
          
      ]);  
      return myRoutes;
}      

export default MerchantRoutes

