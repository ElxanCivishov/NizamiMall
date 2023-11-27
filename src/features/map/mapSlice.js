import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mapService from "./mapService";
import { toast } from "react-toastify";

export const getMaps = createAsyncThunk(
  "map/get-maps",
  async (search, thunkAPI) => {
    try {
      return await mapService.getMaps(search);
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

export const createMap = createAsyncThunk(
  "map/create-map",
  async (mapData, thunkAPI) => {
    try {
      return await mapService.createMap(mapData);
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

export const getMap = createAsyncThunk("map/get-map", async (id, thunkAPI) => {
  try {
    return await mapService.getMap(id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateMap = createAsyncThunk(
  "map/update-map",
  async (data, thunkAPI) => {
    try {
      return await mapService.updateMap(data);
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

export const deleteMap = createAsyncThunk(
  "map/delete-map",
  async (id, thunkAPI) => {
    try {
      return await mapService.deleteMap({ id });
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
  maps: [],
  map: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    RESET: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.map = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMaps.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMaps.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.maps = action.payload;
      })
      .addCase(getMaps.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getMap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.map = action.payload;
      })
      .addCase(getMap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      })
      .addCase(createMap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.maps.push(action.payload);
        toast.success("Əlavə edildi!");
      })
      .addCase(createMap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      })

      .addCase(updateMap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.maps = state.maps.map((c) =>
          c.id === action.payload.id ? action.payload : c
        );
        toast.success("Yeniləndi");
      })
      .addCase(updateMap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      })
      .addCase(deleteMap.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.maps = state.maps.filter((c) => c.id !== action.payload);
      })
      .addCase(deleteMap.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        toast.error("Xəta baş verdi yenidən cəhd edin.");
      });
  },
});

export const { RESET } = mapSlice.actions;
export default mapSlice.reducer;
