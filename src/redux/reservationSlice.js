import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createReservation = createAsyncThunk(
  "reservations/createReservation",
  async (payload) => {
    // Simulate API delay
    await new Promise((res) => setTimeout(res, 1000));
    // Return payload as if saved
    return payload;
  }
);

const reservationSlice = createSlice({
  name: "reservations",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default reservationSlice.reducer;
