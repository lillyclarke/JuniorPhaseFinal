import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk("students", async () => {
  try{
  const { data } = await axios.get("/api/students");
  return data;
  }catch(err){
    console.log(err);
  }
});

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectStudents = (state) => {
  return state.students;
};
export default studentSlice.reducer;
