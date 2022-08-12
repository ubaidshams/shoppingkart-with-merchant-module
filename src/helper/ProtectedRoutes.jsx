import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation,Outlet } from "react-router-dom"

const ProtectedRoute =({children, allowedRole})=>{


  let currentUser = useSelector(state => state.user.currentUser);

    let location  = useLocation();
    const ROLE= currentUser.role
    console.log(ROLE)
    if(ROLE?.find(role=> allowedRole?.includes(role))){
        return children}
        else{
            return <Navigate to='/' state={{from: location }}  replace />
        }
}
export default ProtectedRoute