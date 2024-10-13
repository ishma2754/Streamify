import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStreamifyData = createAsyncThunk(
  "api/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/bbe291cd-b15d-42e5-97e7-53efab28b429"
      );

      if (!response.ok) {
        return rejectWithValue(`Error: ${response.statusText}`);
      }

      const data = await response.json();
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
