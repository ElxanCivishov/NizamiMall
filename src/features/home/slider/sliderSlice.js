import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sliderService from "./sliderService";
import { toast } from "react-toastify";

export const getSliders = createAsyncThunk(
  "slider/get-sliders",
  async (thunkAPI) => {
    try {
      return await sliderService.getSliders();
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

export const createSlider = createAsyncThunk(
  "slider/create-slider",
  async (sliderData, thunkAPI) => {
    try {
      return await sliderService.createSlider(sliderData);
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

export const getSlider = createAsyncThunk(
  "slider/get-slider",
  async (id, thunkAPI) => {
    try {
      return await sliderService.getSlider(id);
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

export const updateSlider = createAsyncThunk(
  "slider/update-slider",
  async (data, thunkAPI) => {
    try {
      return await sliderService.updateSlider(data);
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

export const deleteSlider = createAsyncThunk(
  "slider/delete-slider",
  async (id, thunkAPI) => {
    try {
      return await sliderService.deleteSlider({ id });
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
  sliders: [],
  slider: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const sliderSlice = createSlice({
  name: "sliders",
  initialState,
  reducers: {
    RESET: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.slider = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSliders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSliders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.sliders = action.payload;
      })
      .addCase(getSliders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getSlider.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSlider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.slider = action.payload;
      })
      .addCase(getSlider.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      })
      .addCase(createSlider.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSlider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sliders.push(action.payload);
        toast.success("Əlavə edildi!");
      })
      .addCase(createSlider.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      })

      .addCase(updateSlider.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSlider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sliders = state.sliders.map((c) =>
          c.id === action.payload.id ? action.payload : c
        );
        toast.success("Yeniləndi");
      })
      .addCase(updateSlider.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      })
      .addCase(deleteSlider.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSlider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.sliders = state.sliders.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteSlider.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      });
  },
});

export const { RESET } = sliderSlice.actions;
export default sliderSlice.reducer;
