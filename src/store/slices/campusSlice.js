import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk("campuses", async () => {
  try{
  const { data } = await axios.get("/api/campuses");
  return data;
  }catch(err){
    console.log(err);
  }
});

const campusSlice = createSlice({
  name: "campuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};
export default campusSlice.reducer;
