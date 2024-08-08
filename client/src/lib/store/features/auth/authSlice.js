import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { value: 0 },
    reducers: {
      increment: (state) => { state.value += 1 },
      decrement: (state) => { state.value -= 1 },
      reset: (state) => { state.value = 0 }
    }
  });

  export const { increment, decrement, reset } = authSlice.actions;
  export default authSlice.reducer