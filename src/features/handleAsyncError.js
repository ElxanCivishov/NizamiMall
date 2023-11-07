// Utility function for handling errors
export const handleAsyncError = (error, thunkAPI) => {
  const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();
  thunkAPI.rejectWithValue(message);
};
