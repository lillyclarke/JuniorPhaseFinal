import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCampusesAsync, selectCampuses } from '../store/slices/campusSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Campuses = () => {
  const dispatch = useDispatch()
  const campuses = useSelector(selectCampuses)

  useEffect(() => {
    console.log({campuses})
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

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
