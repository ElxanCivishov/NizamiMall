import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "./contactService";

export const createContact = createAsyncThunk(
  "contact/create-contact",
  async (contact, thunkAPI) => {
    try {
      return await contactService.createContact(contact);
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
  contact: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    RESET: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Müraciətiniz göndərildi.";
        state.contact = action.payload;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.contact = "";
        state.message = action.payload;
      });
  },
});

export const { RESET } = contactSlice.actions;

export default contactSlice.reducer;
