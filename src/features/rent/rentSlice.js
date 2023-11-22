import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rentService from "./rentService";

export const getRents = createAsyncThunk("rent/get-rents", async (thunkAPI) => {
  try {
    return await rentService.getRents();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const createRent = createAsyncThunk(
  "rent/create-rent",
  async (rentData, thunkAPI) => {
    try {
      return await rentService.createRent(rentData);
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

export const getRent = createAsyncThunk(
  "rent/get-rent",
  async (id, thunkAPI) => {
    try {
      return await rentService.getRent(id);
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

export const deleteRent = createAsyncThunk(
  "rent/delete-rent",
  async (id, thunkAPI) => {
    try {
      return await rentService.deleteRent({ id });
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
  rents: [],
  rent: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const rentSlice = createSlice({
  name: "rents",
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
      // fetch rents
      .addCase(getRents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRents.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.rents = payload;
      })
      // fetch one rent
      .addCase(getRents.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      .addCase(getRent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.rent = payload;
      })
      .addCase(getRent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      //  create new rent
      .addCase(createRent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.rents.push(payload);
        state.message = "Müraciət göndərildi.";
      })
      .addCase(createRent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })

      .addCase(deleteRent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.rents = state.rents.filter((c) => c.id !== payload);
        state.message = "Müraciət silindi";
      })
      .addCase(deleteRent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      });
  },
});

export const { RESET } = rentSlice.actions;
export default rentSlice.reducer;
