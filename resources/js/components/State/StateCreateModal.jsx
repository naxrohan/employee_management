import axios from 'axios';
import React, { useState } from 'react'
import Alerts from '../Alerts';

const StateCreateModal = () => {
  const [stateDetails, setStateData] = useState({
    id: 0,
    country_id: '',
    name: '',
});

const [error, setError] = useState(null);
const [message, setMessage] = useState('Message!!');

const handleInputChange = (e) => {
    setStateData(prev => {
        return { ...prev, [e.target.name]: e.target.value }
    })
}

const handleUpdate = async (e) => {
e.preventDefault();

  const data = await axios.post(`/state`,{
    ...stateDetails
  }).then((resp) =>{
    setStateData(resp.data);

    setError(false);
    setMessage("New State saved!!");
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
    <>
          <div className="row text-right mb-4 pb-3">
              {/* <div className='col-md-10'> */}
                  <button
                      type="button"
                      className="btn btn-primary text-right col-4 offset-mb-9"
                      data-bs-toggle="modal"
                      data-bs-target={`#createStateModal`}>Create State</button>
              {/* </div> */}
          </div>
        
    <div className="modal fade" id={`createStateModal`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New State Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
            
              <Alerts message={message} type={error}/>
            
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Country Id</span>
                <input type="text" className="form-control" 
                  placeholder="Country Id" 
                  aria-label="Country Id" 
                  aria-describedby="basic-addon1" 
                  name='country_id'
                  onChange={handleInputChange}
                  value={stateDetails.country_id} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">State Name</span>
                <input type="text" className="form-control" 
                  placeholder="State Name" 
                  aria-label="State Name" 
                  aria-describedby="basic-addon1" 
                  name='name'
                  onChange={handleInputChange}
                  value={stateDetails.name} />
              </div>
              
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" 
                className="btn btn-primary"
                onClick={(e) => handleUpdate(e)}>Save New</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StateCreateModal
