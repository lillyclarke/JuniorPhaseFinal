import { configureStore } from "@reduxjs/toolkit";
import campusSlice from "./slices/campusSlice";
import singleCampusSlice from "./slices/singleCampusSlice";
import studentSlice from "./slices/studentSlice";
import singleStudentSlice from "./slices/singleStudentSlice"

const store = configureStore({
  reducer: {
    campuses: campusSlice,
    singleCampus: singleCampusSlice,
    students: studentSlice,
    singleStudent: singleStudentSlice,
  }
});

export default store;
