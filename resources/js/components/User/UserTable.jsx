import React, { useEffect, useState } from 'react'
import UserTableItemAction from './UserTableItemAction'

const UserTable = () => {
    const [userData, setUserData] = useState([])
  
  const getUserData = async() => {
    try {
      const data = await axios.get('/api/users').then((resp) =>{
        setUserData(resp.data);
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getUserData();
  },[]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>{item.username}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>
                <UserTableItemAction 
                  userId={item.id}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
