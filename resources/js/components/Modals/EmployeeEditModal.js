import React from 'react'

const EmployeeEditModal = ({ modaData, modalId }) => {
  const [employeeDetails, setEmpData] = useState({
    id: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    address: null,
    zip_code: null,
    birthdate: null
})
setEmpData(modaData);

  return (
    <div className="modal fade" id={`editModal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Employee Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
            
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Id</span>
                <input type="text" class="form-control" 
                  placeholder="Username" 
                  aria-label="Username" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.id} disabled readonly/>
              </div>
            
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">First Name</span>
                <input type="text" class="form-control" 
                  placeholder="First Name" 
                  aria-label="First Name" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.first_name} />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Last Name</span>
                <input type="text" class="form-control" 
                  placeholder="Last Name" 
                  aria-label="Last Name" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.last_name} />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Middle Name</span>
                <input type="text" class="form-control" 
                  placeholder="Middle Name" 
                  aria-label="Middle Name" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.middle_name} />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Address</span>
                <input type="text" class="form-control" 
                  placeholder="Address" 
                  aria-label="Address" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.address} />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Zipcode</span>
                <input type="text" class="form-control" 
                  placeholder="Zipcode" 
                  aria-label="Zipcode" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.zip_code} />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">birthdate</span>
                <input type="text" class="form-control" 
                  placeholder="birthdate" 
                  aria-label="birthdate" 
                  aria-describedby="basic-addon1" 
                  value={employeeDetails.birthdate} />
              </div>
              
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" 
                className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EmployeeEditModal
