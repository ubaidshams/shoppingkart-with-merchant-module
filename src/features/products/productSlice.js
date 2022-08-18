import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../apis/Axios";


const initialState = {
  productList: [],
  currentProduct: [],
  error: "",
};

//BEGIN :: USER MODULE FUNCTIONS

export const fetchMerchantProducts = createAsyncThunk("products/fetchMerchantProducts", (merchId)=>{
  return fetch(
    `http://localhost:8080/shopping-kart-ty-api-0.0.1-SNAPSHOT/products/merchant/${merchId}`
  ).then(res => res.json());

})


//END :: USER MODULE FUNCTIONS





//BEGIN :: USER MODULE FUNCTIONS
export const fetchProducts = createAsyncThunk("product/fetchProducts", (merchId) => {
    return fetch(
      "http://localhost:8080/shopping-kart-ty-api-0.0.1-SNAPSHOT/products"
    ).then(res => res.json());
  
});

export const getCurrentProduct = createAsyncThunk(
  "product/getCurrentProduct",
  id => {
    return Axios.get(`/products/${id}`);
  }
);

//END :: USER MODULE FUNCTIONS

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    //BEGIN ::  CUSTOMER MODULE REDUCERS
    [fetchProducts.fulfilled]: (state, action) => {
      state.productList = action.payload.data;
    },
    [getCurrentProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload.data;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [getCurrentProduct.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    //END ::  CUSTOMER MODULE REDUCERS

    // BEGIN :: MERCHANT MODULE REDUCERS
    [fetchMerchantProducts.fulfilled]: (state, action) => {
      state.productList = action.payload.data;
    },
    [fetchMerchantProducts.rejected]: (state, action) => {
      state.error = action.error.message;
    },

    // END :: MERCHANT MODULE REDUCERS

  },
});
export default productSlice.reducer;
