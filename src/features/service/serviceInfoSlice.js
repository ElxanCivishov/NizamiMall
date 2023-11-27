import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import serviceinfoService from "./serviceInfoService";
import { toast } from "react-toastify";

export const getServiceInfo = createAsyncThunk(
  "serviceinfo/get-serviceinfo",
  async (thunkAPI) => {
    try {
      return await serviceinfoService.getServiceInfo();
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

export const updateServiceInfo = createAsyncThunk(
  "serviceinfo/update-serviceinfo",
  async (data, thunkAPI) => {
    try {
      return await serviceinfoService.updateServiceInfo(data);
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
  serviceInfo: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const serviceinfoSlice = createSlice({
  name: "serviceInfo",
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

      .addCase(getServiceInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getServiceInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.serviceInfo = action.payload;
      })
      .addCase(getServiceInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      })

      .addCase(updateServiceInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateServiceInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.serviceInfo = action.payload;
        toast.success("Yeniləndi");
      })
      .addCase(updateServiceInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      });
  },
});

export const { RESET } = serviceinfoSlice.actions;
export default serviceinfoSlice.reducer;
