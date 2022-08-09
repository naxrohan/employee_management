import React from 'react'
import DepartmentTable from './Department/DepartmentTable'
import DepartmentCreateModal from './Department/Modals/DepartmentCreateModal'

const DeptApp = () => {
  return (
    <div className="container">
            <div className="row justify-content-left">
            <p className="h3">Department Listing</p>
                <div className='col-md-4'>
                  <DepartmentCreateModal />
                  <div className='card'>
                    <DepartmentTable />
                  </div>
                </div>
            </div>
        </div>
  )
}

export default DeptApp
