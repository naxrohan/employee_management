import React from 'react'
import UserTable from './User/UserTable'

const UserApp = () => {
  return (
    <div className="container">
            <div className="row justify-content-center">
            <p className="h3">User Listing</p>
                <div className='col-md-12'>
                  <div className='card'>
                    <UserTable />
                  </div>
                </div>
            </div>
        </div>
  )
}

export default UserApp
