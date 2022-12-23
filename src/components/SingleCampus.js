import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleCampus,
  fetchingSingleCampus,
} from "../store/slices/singleCampusSlice";
import { Link } from "react-router-dom";


const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();

  const campus = useSelector(selectSingleCampus);
  // const SingleCampus = useSelector(selectSingleCampus);
  // const { name, imageUrl, address, description, students } = SingleCampus.info

  const unRegisterAStudent = (studentId) => {
    dispatch(unRegisterAStudent(studentId));
  };

  useEffect(() => {
    dispatch(fetchingSingleCampus(campusId));
  }, [dispatch]);

return (
  <div key={campus.id}>
    <h1>{campus.name}</h1>
    <img src={campus.imageUrl} />
    <p>{campus.address}</p>
    <p>{campus.description}</p>
    {campus.students?.map(student => {
      return (
        <div key={student.id}>
          <h1><Link to={`/students/${student.id}`}>{firstName} {lastName}</Link></h1>
          <p>{email}</p>
          <p>{gpa}</p>
          <button onClick={()=>unRegisterAStudent(student.id)}>Unregister</button>
        </div>


      )
    })}
  </div>
);

  };


export default SingleCampus;


//   return (
//     <div id="single-campus" className="column">
//     <div id="single-campus" className="row">
//       <div className="column1">
//         <h1>{campus.name}</h1>
//       </div>
//       <img src={`/${imageUrl}`} />
//       <p>{campus.address}</p>
//       <p>{campus.description}</p>
//       <p>{campus.students}</p>
//     </div>
//     </div>
//   );
// };

