import React, { useEffect } from 'react';
import axios from 'axios';
// import { setCampuses } from '../store/slices/campusSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campuses);

  useEffect(() => {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        dispatch(setCampuses(campuses));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Campuses</h1>
      <ul>
        {
          campuses.map(campus => {
            return (
              <li key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Campuses;
