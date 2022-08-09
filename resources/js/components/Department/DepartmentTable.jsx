import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DepartmentTableItemAction from './DepartmentTableItemAction'

const DepartmentTable = () => {
    const [departmentData, setDepartmentData] = useState([])
  
  const getDepartmentData = async() => {
    try {
      const data = await axios.get('/department').then((resp) =>{
        setDepartmentData(resp.data);
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getDepartmentData();
  },[])


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {departmentData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>
                <DepartmentTableItemAction 
                  deptId={item.id}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default DepartmentTable
