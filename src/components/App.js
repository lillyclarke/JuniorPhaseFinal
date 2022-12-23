import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCampusesAsync } from "../store/slices/campusSlice";
import { fetchStudentsAsync } from "../store/slices/studentSlice";
import Students from "./Students";
import Campuses from "./Campuses";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
// import { Navbar } from "./Navbar";
// import { Campuses, Students } from "./";
import { useEffect } from "react";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Acme Schools</h1>
        </div>
         {/* <Navbar /> */}
          <Routes>
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/campuses/:id" element={<SingleCampus  />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<SingleStudent />} />
          </Routes>
      </div>
    </div>
  );
};

export default App;

