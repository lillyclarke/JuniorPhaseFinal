import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleCampus,
  fetchingSingleCampus,
} from "../store/slices/singleCampusSlice";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();

  const SingleCampus = useSelector(selectSingleCampus);
  const { name, imageUrl, address, description } = SingleCampus;

  const creatingACampus = (e) => {
    e.preventDefault();
    dispatch(creatingACampus({ name, imageUrl, address, description }));
  };

  let sortBy = (e) => {
    e.preventDefault();
    dispatch(sortBy(e.target.value));
  }

  const unRegisterAStudent = (studentId) => {
    dispatch(unRegisterAStudent(studentId));
  };

  useEffect(() => {
    dispatch(fetchingSingleCampus(campusId));
  }, [dispatch]);

  useEffect(() => {
    if (sort === "empty") {
      dispatch(showEmptyCampuses());
    } if (sort === "all") {
      dispatch(showAllCampuses());
    } if (sort === "#students") {
      dispatch(showCampusesByStudentCount());
    }
  })

  return (
    <div>
      <form onSubmit={creatingACampus}>
      <input type="text" placeholder="Campus Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Campus Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <input type="text" placeholder="Campus Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="Campus Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add A Campus</button>
      </form>
      <select value="sort" onChange={sortBy}>
        <option value="empty">Show Empty Campuses</option>
        <option value="all">Show All Campuses</option>
        <option value="#students">Sort By Number of Students</option>
      </select>
      {campuses.map(campus => {
        return (
          <div key={campus.id}>
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} />
            <p>{campus.address}</p>
            <p>{campus.description}</p>
            <Link to={`/campuses/${campus.id}`}>View This Campus</Link>
            <button onClick={()=>deleteACampus(campus.id)}>X</button>
          </div>
        )
      }
    )}
    </div>
  )
};

export default SingleCampus;
