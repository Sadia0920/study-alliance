import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../hooks/useAxiosSecure';
import useNote from '../../hooks/useNote';
// import { AuthContext } from '../../provider/AuthProvider';

export default function ManagePersonalNotes() {
  // const {user} = useContext(AuthContext)
  const [note] = useNote()
  // const axiosSecure = useAxiosSecure();  

  // delete volunteer post
  //   const handleDeletePost = (_id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://volun-force-server.vercel.app/posts/${_id}`,{
  //         method : 'DELETE'
  //       })
  //       .then(res => res.json())
  //       .then(data => {
  //         // console.log(data)
  //         if(data.deletedCount > 0){
  //         Swal.fire({
  //         title: "Deleted!",
  //         text: "Your Note has been deleted.",
  //         icon: "success"
  //       });
  //       const remainingPost = postData.filter(post => post._id !== _id)
  //       setPostData(remainingPost)
  //         }
  //       })
  //     }
  //   });
  // }

  return (
    <div>
    <Helmet>
        <title>Study Alliance | Manage Personal Notes</title>
    </Helmet>
    
  {/* My Volunteer Need Post */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>My Notes</h1>
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th></th>
      <th>Email</th>
      <th>Title</th>
      <th>Description</th>
      <th>Action</th>
      </tr>
    </thead>
    <tbody> 
    {/* row 1 */}
    {
      note.map((item,idx) =>  <tr key={item._id}>
      <th>{idx + 1}</th>
      <td>{item.email}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>
        <button className='btn'>Update</button>
        <button className='btn'>delete</button>
      {/* update button */}
      {/* <Link to={`/updatePost/${item._id}`}><button className='btn mr-2'><i className="fa-regular fa-pen-to-square"></i></button></Link> */}
      {/* delete button */}
      {/* <button onClick={()=>handleDeletePost(item._id)} className='btn'><i className="fa-regular fa-trash-can"></i></button>  */}
      </td>
      </tr>)
    }
  </tbody>
  </table>
  </div>
  </div>
  </div>
  )
}