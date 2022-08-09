import React, { useState } from 'react'
import Alerts from '../../Alerts'

const EmployeeDeleteModal = ({modalId}) => {

    const [error, setError] = useState(null);
    const [message, setMessage] = useState('Message!!');

    const handleDelete = async() => {
        const removeUser = await axios.delete(`/employee/${modalId}`)
        .then((resp) => {
            setError(false);
            setMessage("Employee record has been deleted.!!");
            setTimeout(() => {
                location.reload();
            }, 1500);
        })
        .catch((err) => {
            setError(true);
            setMessage("Error was encountered!!");
            setTimeout(() => {
                location.reload();
            }, 1500);
        });
    }
  return (
    <div className="modal fade" id={`deleteModal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Delete Confirmation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <Alerts message={message} type={error}/>
                <p>Are you sure you want to delete this Employee?</p>
                <p>This action can not be undone!!</p>
                <p>
                    <strong>Employee to be deleted -- id: </strong> {modalId}
                </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" 
                className="btn btn-primary"
                onClick={(e) => handleDelete(e)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EmployeeDeleteModal
