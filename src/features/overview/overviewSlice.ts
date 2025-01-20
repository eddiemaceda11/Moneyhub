import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const items = fetch("../../data.json")
//   .then((res) => res.json())
//   .then((data) => data);

// console.log(items);

const initialState: any = [];

const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {},
});

export default overviewSlice.reducer;
