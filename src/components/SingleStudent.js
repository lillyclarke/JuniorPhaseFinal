// import React, { useEffect } from "react";
// import { userParams, Link, Route, Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectSingleCampus,
//   fetchingSingleCampus,
// } from "../store/slices/singleCampusSlice";


// const SingleCampus = () => {
//   const dispatch = useDispatch();
//   const { campusId } = useParams();

//   const student = useSelector(selectSingleCampus);

//   useEffect(() => {
//     dispatch(fetchingSingleCampus(campusId));
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>{student.firstName}</h1>
//       <img src={student.imageUrl} />
//       <p>{student.email}</p>
//       <p>{student.gpa}</p>


// export default SingleCampus;
