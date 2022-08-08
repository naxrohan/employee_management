import axios from 'axios'
import React, {useEffect, useState} from 'react'
import EmployeeTableItem from './EmployeeTableItem'

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([])
  
  const getEmployeeData = async() => {
    try {
      const data = await axios.get('/employee').then((resp) =>{
        setEmployeeData(resp.data);
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getEmployeeData();
  },[])


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Middle</th>
            <th scope="col">Last</th>
            <th scope="col">zipcode</th>
            <th scope="col">birthdate</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>{item.first_name}</td>
              <td>{item.middle_name}</td>
              <td>{item.last_name}</td>
              <td>{item.zip_code}</td>
              <td>{item.birthdate}</td>
              <td>
                <EmployeeTableItem 
                  employeeId={item.id}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable
