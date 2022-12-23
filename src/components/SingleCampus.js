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

  const campus = useSelector(selectSingleCampus);
  const SingleCampus = useSelector(selectSingleCampus);
  console.log(SingleCampus, "this is from single campus")

  const creatingACampus = (e) => {
    e.preventDefault();
    dispatch(creatingACampus({ name, imageUrl, address, description }));
  };

  const unRegisterAStudent = (studentId) => {
    dispatch(unRegisterAStudent(studentId));
  };

  useEffect(() => {
    dispatch(fetchingSingleCampus(campusId));
  }, [dispatch]);

// return (
//   <div key={campus.id}>
//     <h1>{campus.name}</h1>
//     <img src={campus.imageUrl} />
//     <p>{campus.address}</p>
//     <p>{campus.description}</p>
//     {campus.students?.map(student => {
//       return (
//         <div key={student.id}>
//           <h1><Link to={`/students/${student.id}`}>{firstName} {lastName}</Link></h1>
//           <p>{email}</p>
//           <p>{gpa}</p>
//           <button onClick={()=>unRegisterAStudent(student.id)}>Unregister</button>
//         </div>


//       )
//     })}
//   </div>
// );

//   };
// };
  return (
    <div>
      <form onSubmit={creatingACampus}>
      <input type="text" placeholder="Campus Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Campus Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <input type="text" placeholder="Campus Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder="Campus Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add A Campus</button>
      </form>

    </div>
  )
};

export default SingleCampus;
