import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import helpService from "./helpService";

export const getHelp = createAsyncThunk("help/get-help", async (thunkAPI) => {
  try {
    return await helpService.getHelp();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  help: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const helpSlice = createSlice({
  name: "help",
  initialState,
  reducers: {
    RESET: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHelp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHelp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.help = action.payload[0]?.text;
      })
      .addCase(getHelp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export const { RESET } = helpSlice.actions;

export default helpSlice.reducer;
