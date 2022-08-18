import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import PersistentLogin from "./components/PersistentLogin/PersistentLogin";
import { useSelector, useDispatch } from "react-redux";

import CustomRoutes2 from "./routes/CustomRoutes2";
import { fetchProducts , fetchMerchantProducts} from "./features/products/productSlice";
import Home from "./pages/home/Home";
import MerchantDashBoard from "./MERCHANT_MODULE/home/Home";
import ProtectedRoute from "./helper/ProtectedRoutes";
import MerchantRoutes from "./routes/MerchantRoutes";


const App = () => {
  AOS.init({ once: true });
  let currentUser = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();
  useEffect(() => {
    if (currentUser !== null && currentUser.role?.includes("CUSTOMER")) {
      dispatch(fetchProducts());
    }
  }, []);

  

  return (
    <div>
      <Router>
        <ToastContainer />
        <PersistentLogin>
          {(Object.keys(currentUser).length !== 0) ? (
            <>
              {currentUser.role?.includes("CUSTOMER") ? (
                <>
                  <Navbar />
                  <CustomRoutes />
                  <Footer />
                </>
              ) : (currentUser.role?.includes("MERCHANT")) ? (
                  < MerchantRoutes/>
              ) : (
                <h1>Your are Role is Authorized</h1>
              )}
            </>
          ) : (
            <>
              <Navbar />
              <CustomRoutes2 />
              <Footer />
            </>
          )}
        </PersistentLogin>
      </Router>
    </div>
  );
};

export default App;
