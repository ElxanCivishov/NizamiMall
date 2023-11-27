import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bloginfoService from "./blogInfoService";
import { toast } from "react-toastify";

export const getBlogInfo = createAsyncThunk(
  "blogtext/get-blogtext",
  async (thunkAPI) => {
    try {
      return await bloginfoService.getBlogInfo();
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

export const updateBlogInfo = createAsyncThunk(
  "blogtext/update-blogtext",
  async (data, thunkAPI) => {
    try {
      return await bloginfoService.updateBlogInfo(data);
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
  blogText: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const bloginfoSlice = createSlice({
  name: "blogText",
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
      .addCase(getBlogInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.blogText = action.payload;
      })
      .addCase(getBlogInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      .addCase(updateBlogInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlogInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogText = action.payload;
        toast.success("Yeniləndi");
      })
      .addCase(updateBlogInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      });
  },
});

export const { RESET } = bloginfoSlice.actions;
export default bloginfoSlice.reducer;
