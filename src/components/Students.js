import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchStudentsAsync, selectStudents } from '../store/slices/studentSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'


const Students = () => {
  const dispatch = useDispatch()
  const students = useSelector(selectStudents);

  useEffect(() => {
    console.log({students})
    dispatch(fetchStudentsAsync());
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {
          students.map(student => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>{student.name}</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Students;

