import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subcatService from "./subCategoryService";

export const getSubCats = createAsyncThunk(
  "subcat/get-subcats",
  async (thunkAPI) => {
    try {
      return await subcatService.getSubCats();
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

export const createSubCat = createAsyncThunk(
  "subcat/create-subcat",
  async (subcatData, thunkAPI) => {
    try {
      return await subcatService.createSubCat(subcatData);
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

export const getSubCat = createAsyncThunk(
  "subcat/get-subcat",
  async (id, thunkAPI) => {
    try {
      return await subcatService.getSubCat(id);
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

export const updateASubCat = createAsyncThunk(
  "subcat/update-subcat",
  async (data, thunkAPI) => {
    try {
      return await subcatService.updateSubCat(data);
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

export const deleteSubCat = createAsyncThunk(
  "subcat/delete-subcat",
  async (id, thunkAPI) => {
    try {
      return await subcatService.deleteSubCat(id);
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
  subcats: [],
  subcat: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const subcatSlice = createSlice({
  name: "subcats",
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
      // fetch subcats
      .addCase(getSubCats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.subcats = payload;
      })
      // fetch one subcat
      .addCase(getSubCats.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      .addCase(getSubCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.subcat = payload;
      })
      .addCase(getSubCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      //  create new subcat
      .addCase(createSubCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSubCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.subcats.push(payload);
        state.message = "Kateqoriya yaradıldı.";
      })
      .addCase(createSubCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      // uodated motorcycle
      .addCase(updateASubCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateASubCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.subcats = state.subcats.map((c) =>
          c.id === payload.id ? payload : c
        );

        state.message = "Kateqoriya yenilendi.";
      })
      .addCase(updateASubCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      })
      .addCase(deleteSubCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSubCat.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.subcat = null;
        state.subcats = state.subcats.filter((c) => c.id !== payload);
        state.message = "Kateqoriya silindi";
      })
      .addCase(deleteSubCat.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "Xəta baş verdi yenidəm cəhd edin.";
      });
  },
});

export const { RESET } = subcatSlice.actions;
export default subcatSlice.reducer;
