import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import maincatService from "./mainCategoryService";

export const getMainCats = createAsyncThunk(
  "maincat/get-maincats",
  async (thunkAPI) => {
    try {
      return await maincatService.getMainCats();
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

export const createMainCat = createAsyncThunk(
  "maincat/create-maincat",
  async (maincatData, thunkAPI) => {
    try {
      return await maincatService.createMainCat(maincatData);
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

export const getMainCat = createAsyncThunk(
  "maincat/get-maincat",
  async (id, thunkAPI) => {
    try {
      return await maincatService.getMainCat(id);
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

export const updateAMainCat = createAsyncThunk(
  "maincat/update-maincat",
  async (data, thunkAPI) => {
    try {
      return await maincatService.updateMainCat(data);
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

export const deleteMainCat = createAsyncThunk(
  "maincat/delete-maincat",
  async (id, thunkAPI) => {
    try {
      return await maincatService.deleteMainCat(id);
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
  maincats: [],
  maincat: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const maincatSlice = createSlice({
  name: "maincats",
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
      // fetch maincats
      .addCase(getMainCats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainCats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.maincats = payload;
      })
      // fetch one maincat
      .addCase(getMainCats.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      .addCase(getMainCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.maincat = payload;
      })
      .addCase(getMainCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      //  create new maincat
      .addCase(createMainCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMainCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.maincats.push(payload);
        state.message = "Kateqoriya yaradıldı.";
      })
      .addCase(createMainCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      // uodated motorcycle
      .addCase(updateAMainCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAMainCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.maincats = state.maincats.map((c) =>
          c.id === payload.id ? payload : c
        );

        state.message = "Kateqoriya yenilendi.";
      })
      .addCase(updateAMainCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      .addCase(deleteMainCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMainCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.maincat = null;
        state.maincats = state.maincats.filter((c) => c.id !== payload);
        state.message = "Kateqoriya silindi";
      })
      .addCase(deleteMainCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      });
  },
});

export const { RESET } = maincatSlice.actions;
export default maincatSlice.reducer;
