import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/auth/authSlice"



  const makeStore = () =>{
    return configureStore({
        reducer:{
            auth:authSlice,
            
        }
    })
} 

export default makeStore