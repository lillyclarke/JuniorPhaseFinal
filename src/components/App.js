import React from "react";
import { fetchCampusesAsync } from "../store/slices/campusSlice";
import { fetchStudentsAsync } from "../store/slices/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import Campuses from "./Campuses";
// import Students from "./Students";
import { Navbar, Campuses, Students } from "./";

const App = () => {
  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Acme Schools</h1>
        </div>
        <Navbar />
          <Routes>
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/campuses/:id" element={<Campuses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<Students />} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
