import React from 'react'
import EmployeeTable from './Employee/EmployeeTable'
import EmployeeCreateModal from './Employee/Modals/EmployeeCreateModal'

const App = () => {
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-12'>
                  <EmployeeCreateModal />
                  <div className='card'>
                    <EmployeeTable />  
                  </div>
                </div>
            </div>
        </div>
  )
}

export default App
