import { configureStore } from "@reduxjs/toolkit"

import searchTextSlice from "./features/searchText/searchTextSlice"
import paginationSlice from "./features/pagination/paginationSlice"

  const makeStore = () =>{
    return configureStore({
        reducer:{
           
            search:searchTextSlice,
            pagination: paginationSlice
            
        }
    })
} 

export default makeStore