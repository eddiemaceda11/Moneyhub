import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const data = fetch("@/data.json");
console.log(data);

const initialState = data;

const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {},
});

export default overviewSlice.reducer;
