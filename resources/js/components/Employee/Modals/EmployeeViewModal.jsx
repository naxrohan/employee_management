import React from 'react'

const EmployeeViewModal = ({ modaData, modalId }) => {
  return (
    <div className="modal fade" id={`viewModal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Employee Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <strong>id:</strong> {modaData.id} <hr/>
              <strong>First Name:</strong>{modaData.first_name}<hr/>
              <strong>Middle Name:</strong>{modaData.middle_name}<hr/>
              <strong>Last Name:</strong>{modaData.last_name}<hr/>
              <strong>Address:</strong>{modaData.address}<hr/>
              <strong>Zipcode:</strong>{modaData.zip_code}<hr/>
              <strong>birthdate:</strong>{modaData.birthdate}<hr/>
              <strong>department_id:</strong>{modaData.department_id}<hr/>
              <strong>country_id:</strong>{modaData.country_id}<hr/>
              <strong>state_id:</strong>{modaData.state_id}<hr/>
              <strong>city_id:</strong>{modaData.city_id}<hr/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EmployeeViewModal
