import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsletterService from "./newsletterService";

export const createNewsletter = createAsyncThunk(
  "newsletter/create-newsletter",
  async (newsletter, thunkAPI) => {
    try {
      return await newsletterService.createNewsletter(newsletter);
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

export const deleteNewsletter = createAsyncThunk(
  "newsletter/delete-newsletter",
  async (id, thunkAPI) => {
    try {
      return await newsletterService.deleteNewsletter({ id });
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

export const getNewsletters = createAsyncThunk(
  "newsletter/get-newsletters",
  async (thunkAPI) => {
    try {
      return await newsletterService.getNewsletters();
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
  newsletters: [],
  newsletter: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const newsletterSlice = createSlice({
  name: "newsletters",
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
      .addCase(createNewsletter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewsletter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.newsletters.push(payload);
        state.message = "Email göndərildi.";
      })
      .addCase(createNewsletter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = payload;
      })
      // fetch newsletters
      .addCase(getNewsletters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsletters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.newsletters = payload;
      })
      // fetch one newsletter
      .addCase(getNewsletters.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      .addCase(deleteNewsletter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNewsletter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.newsletters = state.newsletters.filter((c) => c.id !== payload);
        state.message = "Subscribe silindi";
      })
      .addCase(deleteNewsletter.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      });
  },
});

export const { RESET } = newsletterSlice.actions;

export default newsletterSlice.reducer;
