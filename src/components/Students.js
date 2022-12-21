import React, { useEffect } from 'react';
import axios from 'axios';
// import { setCampuses } from '../store/slices/campusSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  useEffect(() => {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(setStudents(students));
      })
      .catch(err => console.log(err));
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
