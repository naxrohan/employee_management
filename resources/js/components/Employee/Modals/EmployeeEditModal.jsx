import React, { useEffect, useState } from 'react'
import Alerts from '../../Alerts';

const EmployeeEditModal = ({ modaData, modalId , otherDependantValues}) => {
  const [employeeDetails, setEmpData] = useState(modaData);

  const [error, setError] = useState(null);
  const [message, setMessage] = useState('Message!!');

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
    
      const data = await axios.put(`/api/employee/${modalId}`,{
        ...employeeDetails
      }).then((resp) =>{
        setEmpData(resp.data);

        setError(false);
        setMessage("Updated saved!!");
        setTimeout(() => {
          location.reload();
        }, 1500);
      }).catch((err) => {
        
        setError(true);
        setMessage("Error was encountered!!");
        setTimeout(() => {
          location.reload();
        }, 1500);
      });
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
            
              <Alerts message={message} type={error}/>
            
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

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1x">Department</span>
                <select className="form-control" 
                  name='department_id'
                  onChange={handleInputChange} >
                    <option>--select department --</option>
                  { otherDependantValues[0].map( (item, key) => (
                    <option 
                      key={key} 
                      selected={item.id === employeeDetails.department_id ? 'selected' : ''}
                      value={item.id}>{item.name}</option>
                  ) ) }
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1x">Country</span>
                <select className="form-control" 
                  name='country_id'
                  onChange={handleInputChange} >
                    <option>--select country --</option>
                  { otherDependantValues[1].map( (item, key) => (
                    <option 
                      key={key} 
                      selected={item.id === employeeDetails.country_id ? 'selected' : ''}
                      value={item.id}>{item.name}</option>
                  ) ) }
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1x">State</span>
                <select className="form-control" 
                  name='state_id'
                  onChange={handleInputChange} >
                    <option>--select state --</option>
                  { otherDependantValues[2].map( (item, key) => (
                    <option 
                      key={key} 
                      selected={item.id === employeeDetails.state_id ? 'selected' : ''}
                      value={item.id}>{item.name}</option>
                  ) ) }
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1x">City</span>
                <select className="form-control" 
                  name='city_id'
                  onChange={handleInputChange} >
                    <option>--select city --</option>
                  { otherDependantValues[3].map( (item, key) => (
                    <option 
                      key={key} 
                      selected={item.id === employeeDetails.city_id ? 'selected' : ''}
                      value={item.id}>{item.name}</option>
                  ) ) }
                </select>
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
