import React, { useEffect } from "react";
import { userParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleStudent,
  fetchingSingleStudent,
} from "../store/slices/singleStudentSlice";


const SingleStudent = () => {
  const dispatch = useDispatch();
  // const { campusId } = useParams();

  const SingleStudent = useSelector(selectSingleStudent);
  const { firstName, lastName, email, gpa, campusId } = SingleStudent;

  const createAStudent = (e) => {
    e.preventDefault();
    dispatch(
      createAStudent({ firstName, lastName, email, gpa, campusId })
    );

  const sortBy = (e) => {
    e.preventDefault();
    dispatch(sortBy(e.target.value));
  };

  const deleteStudent = (e) => {
    e.preventDefault();
    dispatch(deleteStudent(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchingSingleStudent(campusId));
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={createAStudent}>
        <label htmlFor="name">Name</label>
          <input type="text" name="name" value={firstName} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email</label>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="gpa">GPA</label>
          <input type="text" name="gpa" value={gpa} onChange={(e) => setGpa(e.target.value)} />
        <button type="submit">Add A Student</button>
      </form>
      <select onChange={sortBy}>
        <option value="all">Show all Students</option>
        <option value="lastName">Sort by Last Name</option>
        <option value="gpa">Sort by GPA</option>
        <option value="unregistered">Show Unregistered Students</option>
      </select>
      {students.map(student => {
        return (
          <div key={student.id}>
            <h1>{student.firstName} {student.lastName}</h1>
            <p>{student.email}</p>
            <p>{student.gpa}</p>
            <p>{student.campusId ? student.campus.name : "Not Registered"}</p>
            <Link to={`/students/${student.id}`}>View This Student</Link>
            <button onClick={() => deleteStudent(student.id)}>X</button>
          </div>
        )
      }
    )}
    </div>
  )}
};

export default SingleStudent;
