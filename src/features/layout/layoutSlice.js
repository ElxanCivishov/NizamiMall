import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import layoutService from "./layoutService";
import { toast } from "react-toastify";

export const getLayout = createAsyncThunk(
  "layout/get-layouts",
  async (thunkAPI) => {
    try {
      return await layoutService.getLayout();
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

export const updateLayout = createAsyncThunk(
  "layout/update-layout",
  async (data, thunkAPI) => {
    try {
      return await layoutService.updateLayout(data);
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
  layout: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const layoutSlice = createSlice({
  name: "layout",
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
      .addCase(getLayout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLayout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.layout = payload;
      })
      .addCase(getLayout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        toast.error("Xəta baş verdi yenidəm cəhd edin.");
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      }) // uodated layout
      .addCase(updateLayout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLayout.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedLayout = payload;
        state.message = "Layout yeniləndi";
        toast.success("Layout yeniləndi");
      })
      .addCase(updateLayout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
        toast.error("Xəta baş verdi yenidəm cəhd edin.");
      });
  },
});

export const { RESET } = layoutSlice.actions;
export default layoutSlice.reducer;
