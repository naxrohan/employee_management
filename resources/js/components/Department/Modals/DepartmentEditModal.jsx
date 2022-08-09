import React, { useEffect, useState } from 'react'
import Alerts from '../../Alerts';

const DepartmentEditModal = ({ modaData, modalId }) => {
    const [departmentDetails, setDeptData] = useState(modaData);

    const [error, setError] = useState(null);
    const [message, setMessage] = useState('Message!!');

    useEffect(() => {
        setDeptData(modaData);
    }, [modaData]);

    const handleInputChange = (e) => {
        setDeptData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        const data = await axios.put(`/department/${modalId}`, {
            ...departmentDetails
        }).then((resp) => {
            setDeptData(resp.data);

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
              <h5 className="modal-title" id="exampleModalLabel">Department Details:</h5>
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
                  value={departmentDetails.id} disabled readOnly/>
              </div>
            
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Department Name</span>
                <input type="text" className="form-control" 
                  placeholder="Department Name" 
                  aria-label="Department Name" 
                  aria-describedby="basic-addon1" 
                  name='name'
                  onChange={handleInputChange}
                  value={departmentDetails.name} />
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

export default DepartmentEditModal
