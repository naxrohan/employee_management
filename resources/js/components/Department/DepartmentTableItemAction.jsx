import React, { useState } from 'react'
import DepartmentDeleteModal from './Modals/DepartmentDeleteModal';
import DepartmentEditModal from './Modals/DepartmentEditModal';
import DepartmentViewModal from './Modals/DepartmentViewModal';

const DepartmentTableItemAction = ({deptId}) => {
  const [deptData, setDeptData] = useState({
    id: 0,
    name: 'null'
  })

  const getDepartmentData = async(id) => {
    try {
      const data = await axios.get(`/api/department/${id}`).then((resp) =>{
        setDeptData(resp.data);
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
            <button 
                className="btn btn-secondary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#viewModal${deptId}`}
                onClick={() => getDepartmentData(deptId)}>View</button>
              <DepartmentViewModal modalId={deptId} modalData={deptData} />
            
            <button 
                className="btn btn-primary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#editModal${deptId}`}
                onClick={() => getDepartmentData(deptId)}>Edit</button>
              <DepartmentEditModal modalId={deptId} modaData={deptData} />
            
            <button 
                className="btn btn-warning btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#deleteModal${deptId}`}>Delete</button>
              <DepartmentDeleteModal modalId={deptId} />
        </div>
    </div>
  )
}

export default DepartmentTableItemAction;
