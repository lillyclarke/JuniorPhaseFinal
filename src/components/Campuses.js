import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCampuses } from '../store/slices/campusSlice';
import { Link } from 'react-router-dom';

const Campuses = () => {
  const campuses = useSelector(selectCampuses)

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

//   return (
//     <div>
//       {campuses && campuses.length
//         ? campuses.map((campus => (
//           <Link
//           to={`/campuses/${campus.id}`}
//           key={`Campuses: ${campus.id}`}
//           >
//             <div className="campus row">
//               <h1>{campus.name}</h1>
//               <img src={campus.imageUrl} />
//               <p>{campus.address}</p>
//               <p>{campus.description}</p>
//             </div>
//           </Link>
//         )))
//         : null}
//     </div>
//   );
// };

export default Campuses;
