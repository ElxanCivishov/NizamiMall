import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validation: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addValidation: (state, action) => {
      state.validation = action.payload;
    },
  },
});

export const { addValidation } = dataSlice.actions;
export default dataSlice.reducer;
