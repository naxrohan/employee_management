import React, { useEffect, useState } from 'react'

const EmployeeEditModal = ({ modaData, modalId }) => {
  const [employeeDetails, setEmpData] = useState(modaData);

  useEffect( () => {
    setEmpData(modaData);
  },[modaData]);

  const handleInputChange = (e) => {
    setEmpData(prev =>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleUpdate = async(e) => {
    e.preventDefault();
    try {
      const data = await axios.put(`/employee/${modalId}`,{
        ...employeeDetails
      }).then((resp) =>{
        setEmpData(resp.data);
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="modal fade" id={`editModal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Employee Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
            
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Id</span>
                <input type="text" className="form-control" 
                  placeholder="ID" 
                  aria-label="ID" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.id} disabled readOnly/>
              </div>
            
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">First Name</span>
                <input type="text" className="form-control" 
                  placeholder="First Name" 
                  aria-label="First Name" 
                  aria-describedby="basic-addon1" 
                  name='first_name'
                  onChange={handleInputChange}
                  value={employeeDetails.first_name} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Last Name</span>
                <input type="text" className="form-control" 
                  placeholder="Last Name" 
                  aria-label="Last Name" 
                  aria-describedby="basic-addon1" 
                  name='last_name'
                  onChange={handleInputChange}
                  value={employeeDetails.last_name} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Middle Name</span>
                <input type="text" className="form-control" 
                  placeholder="Middle Name" 
                  aria-label="Middle Name" 
                  aria-describedby="basic-addon1" 
                  name='middle_name'
                  onChange={handleInputChange}
                  value={employeeDetails.middle_name} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" className="form-control" 
                  placeholder="Address" 
                  aria-label="Address" 
                  aria-describedby="basic-addon1" 
                  name='address'
                  onChange={handleInputChange}
                  value={employeeDetails.address} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Zipcode</span>
                <input type="text" className="form-control" 
                  placeholder="Zipcode" 
                  aria-label="Zipcode" 
                  aria-describedby="basic-addon1" 
                  name='zip_code'
                  onChange={handleInputChange}
                  value={employeeDetails.zip_code} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">birthdate</span>
                <input type="text" className="form-control" 
                  placeholder="birthdate" 
                  aria-label="birthdate" 
                  aria-describedby="basic-addon1" 
                  name='birthdate'
                  onChange={handleInputChange}
                  value={employeeDetails.birthdate} />
              </div>
              
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" 
                className="btn btn-primary"
                onClick={(e) => handleUpdate(e)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EmployeeEditModal
