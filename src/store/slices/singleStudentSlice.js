import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  imageUrl: "",
  gpa: "",
};

export const fetchingSingleStudent = createAsyncThunk("singleStudent", async (id) => {
  try{
  const { data } = await axios.get(`/api/students/${id}`);
  return data;
  }catch(err){
    next(err);
  }
});

const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchingSingleStudent.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectSingleStudent = (state) => {
  return state.singleStudent;
};

export default singleStudentSlice.reducer;


