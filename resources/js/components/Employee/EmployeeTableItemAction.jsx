import React, { useEffect, useState } from 'react'
import EmployeeDeleteModal from './Modals/EmployeeDeleteModal'
import EmployeeEditModal from './Modals/EmployeeEditModal'
import EmployeeViewModal from './Modals/EmployeeViewModal'

const EmployeeTableItemAction = ({employeeId}) => {
    const [empData, setEmpData] = useState({
        id: 0,
        first_name: 'null',
        middle_name: 'null',
        last_name: 'null',
        address: 'null',
        zip_code: 'null',
        birthdate: 'null',
        department_id: 'null',
        country_id: 'null',
        state_id: 'null',
        city_id: 'null'
    });
    const [deptData, setDeptData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);
    
    const getEmployeeData = async(id) => {
        try {
            const data = await axios.get(`/api/employee/${id}`).then((resp) =>{
              setEmpData(resp.data.employee);
              setDeptData(resp.data.departments);
              setCountryData(resp.data.countries);
              setStateData(resp.data.states);
              setCityData(resp.data.cities);
            })
          } catch (error) {
            console.log(error)
          }
    }
    
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button 
                className="btn btn-secondary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#viewModal${employeeId}`}
                onClick={() => getEmployeeData(employeeId)}>View</button>
            <EmployeeViewModal 
                modaData={empData} 
                modalId={employeeId} />

            <button 
                className="btn btn-primary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#editModal${employeeId}`}
                onClick={() => getEmployeeData(employeeId)}>Edit</button>
            <EmployeeEditModal 
                modaData={empData} 
                modalId={employeeId}
                otherDependantValues={[deptData,countryData,stateData,cityData]} />

            <button 
                className="btn btn-warning btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#deleteModal${employeeId}`}>Delete</button>
            <EmployeeDeleteModal 
                modalId={employeeId} />
        </div>
    )
}

export default EmployeeTableItemAction
