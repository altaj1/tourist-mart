import { configureStore } from "@reduxjs/toolkit"

import searchTextSlice from "./features/searchText/searchTextSlice"

  const makeStore = () =>{
    return configureStore({
        reducer:{
           
            search:searchTextSlice
            
        }
    })
} 

export default makeStore