import React from 'react'
import EmployeeTable from './EmployeeTable'

const App = () => {
  return (
    <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-10'>
                  <div className='card'>
                    <EmployeeTable />  
                  </div>
                </div>
            </div>
        </div>
  )
}

export default App
