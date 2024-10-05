import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStreamifyData = createAsyncThunk(
  "api/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://af71fa797f2242778ec3bf0e0f639606.api.mockbin.io/"
      );

      if (!response.ok) {
        return rejectWithValue(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue("Network error: " + error.message);
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const streamifySlice = createSlice({
  name: "streamify",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStreamifyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStreamifyData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStreamifyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default streamifySlice.reducer;
