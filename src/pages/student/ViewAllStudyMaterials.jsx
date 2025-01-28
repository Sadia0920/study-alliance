import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useUploadMaterials from '../../hooks/useUploadMaterials';

export default function ViewAllStudyMaterials() {

  const axiosSecure = useAxiosSecure();
  const [materials,refetch] = useUploadMaterials();

  return (
    <div>
    <Helmet>
        <title>Study Alliance | View All Materials</title>
    </Helmet>
    
  {/* My Materials */}

  <div className='w-10/12 mx-auto py-7'>
  <h1 className='text-3xl font-bold text-center mb-6'>My Materials</h1>
    <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
      <th>Image</th>
      <th>Title</th>
      <th>Google Drive Link</th>
      </tr>
    </thead>
    <tbody> 
    {/* row 1 */}
    {
      materials.map((item,idx) =>  <tr key={item._id}>
      <th>{idx + 1}</th>
      <td><img class='w-20 h-20' src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.link}</td>
      </tr>)
    }
  </tbody>
  </table>
  </div>
  </div>
  </div>
  )
}
