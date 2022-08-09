import React from 'react'
import DepartmentTable from './Department/DepartmentTable'

const DeptApp = () => {
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-4'>
                  <div className='card'>
                    <DepartmentTable />
                  </div>
                </div>
            </div>
        </div>
  )
}

export default DeptApp
