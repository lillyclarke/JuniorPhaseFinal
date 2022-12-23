import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: "",
  name: "",
  imageUrl: "",
  address: "",
  description: "",
  students: [],
};

export const fetchingSingleCampus = createAsyncThunk("singleCampus", async (id) => {
  try{
  const { data } = await axios.get(`/api/campuses/${id}`);
  return data;
  }catch(err){
    next(err);
  }
});

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchingSingleCampus.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectSingleCampus = (state) => {
  return state.singleCampus;
};

export default singleCampusSlice.reducer;
