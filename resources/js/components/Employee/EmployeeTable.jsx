import axios from 'axios'
import React, {useEffect, useState} from 'react'
import EmployeeTableItemAction from './EmployeeTableItemAction'
import TablePager from './TablePager'

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = 1000;
  const pageDisplaySize = 10;
  const getEmployeeData = async(page , page_size) => {
    try {
      const query = new URLSearchParams({
        page: page,
        size: page_size
      });

      const data = await axios.get(`/api/employee?${query.toString()}`).then((resp) =>{
        setEmployeeData(resp.data.items);

        setTotalItems(resp.data.total_items);
        setCurrentPage(resp.data.current_page)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEmployeeData(currentPage, pageSize);
  },[])


  return (
    <div>
      
      <TablePager
        totalItems={totalItems}
        displaySize={pageDisplaySize} //items to show in the pager
        currentPage={currentPage}
        pageSize={pageSize} //items to show in the table
        handleClick={getEmployeeData} />

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
                <EmployeeTableItemAction 
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
