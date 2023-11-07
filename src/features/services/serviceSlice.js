import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceService from "./serviceService";

export const getServices = createAsyncThunk(
  "service/get-services",
  async (thunkAPI) => {
    try {
      return await serviceService.getServices();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getService = createAsyncThunk(
  "service/get-service",
  async (id, thunkAPI) => {
    try {
      return await serviceService.getService(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  services: [],
  service: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    RESET: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isDeleted = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch services
      .addCase(getServices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.services = payload;
      })
      // fetch one service
      .addCase(getServices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = payload;
      })
      .addCase(getService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getService.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.service = payload;
      })
      .addCase(getService.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = payload;
      });
  },
});

export const { RESET } = serviceSlice.actions;

export default serviceSlice.reducer;
