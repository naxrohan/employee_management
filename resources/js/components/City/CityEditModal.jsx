import React, { useEffect, useState } from 'react'
import Alerts from '../Alerts';

const CityEditModal = ({modalData, modalId, stateData}) => {
    const [cityDetails, setCityData] = useState(modalData);

    const [error, setError] = useState(null);
    const [message, setMessage] = useState('Message!!');

    useEffect(() => {
        setCityData(modalData);
    }, [modalData]);

    const handleInputChange = (e) => {
        setCityData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        const data = await axios.put(`/city/${modalId}`, {
            ...cityDetails
        }).then((resp) => {
            setCityData(resp.data);

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

    const handleDelete = async() => {
        const removeUser = await axios.delete(`/city/${modalId}`)
        .then((resp) => {
            setError(false);
            setMessage("City record has been deleted.!!");
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
    <div className="modal fade" id={`cityEditModal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Country Details:</h5>
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
                  value={cityDetails.id} disabled readOnly/>
              </div>
            
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1x">State Name</span>
                <select className="form-control" 
                  name='state_id'
                  onChange={handleInputChange} >
                    <option>--select state --</option>
                  { stateData.map( (item, key) => (
                    <option 
                      key={key} 
                      selected={item.id === cityDetails.state_id ? 'selected' : ''}
                      value={item.id}>{item.name}</option>
                  ) ) }
                </select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">City Name</span>
                <input type="text" className="form-control" 
                  placeholder="City Name" 
                  aria-label="City Name" 
                  aria-describedby="basic-addon1" 
                  name='name'
                  onChange={handleInputChange}
                  value={cityDetails.name} />
              </div>
              
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" 
                className="btn btn-primary"
                onClick={(e) => handleUpdate(e)}>Save changes</button>
              <button type="button" 
                className="btn btn-danger"
                onClick={(e) => handleDelete(e)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CityEditModal
