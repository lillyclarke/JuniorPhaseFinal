// import React, { useEffect } from "react";
// import { useParams, Link, Route, Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectSingleCampus,
//   fetchingSingleCampus,
// } from "../store/slices/singleCampusSlice";
// import { useDispatch, useSelector } from "react-redux";


// const SingleCampus = () => {
//   const dispatch = useDispatch();
//   const { campusId } = useParams();
//   const campus = useSelector(selectSingleCampus);
//   const { name, imageUrl, address, description, students } = campus;

//   useEffect(() => {
//     dispatch(fetchingSingleCampus(campusId));
//   }, [dispatch]);

//   return (
//     <div id="single-campus" className="column">
//       <h1>{name}</h1>

