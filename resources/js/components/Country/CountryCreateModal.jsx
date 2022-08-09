import React, { useState } from 'react'
import Alerts from '../Alerts';

const CountryCreateModal = () => {
  const [countryDetails, setEmpData] = useState({
    id: 0,
    country_code: '',
    name: '',
});

const [error, setError] = useState(null);
const [message, setMessage] = useState('Message!!');

const handleInputChange = (e) => {
    setEmpData(prev => {
        return { ...prev, [e.target.name]: e.target.value }
    })
}

const handleUpdate = async (e) => {
e.preventDefault();

  const data = await axios.post(`/country`,{
    ...countryDetails
  }).then((resp) =>{
    setEmpData(resp.data);

    setError(false);
    setMessage("New Employee saved!!");
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
                      data-bs-target={`#createCountryModal`}>Create Country</button>
              {/* </div> */}
          </div>
        
    <div className="modal fade" id={`createCountryModal`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Country Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
            
              <Alerts message={message} type={error}/>
            
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Country Code</span>
                <input type="text" className="form-control" 
                  placeholder="Country Code" 
                  aria-label="Country Code" 
                  aria-describedby="basic-addon1" 
                  name='country_code'
                  onChange={handleInputChange}
                  value={countryDetails.country_code} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Country Name</span>
                <input type="text" className="form-control" 
                  placeholder="Country Name" 
                  aria-label="Country Name" 
                  aria-describedby="basic-addon1" 
                  name='name'
                  onChange={handleInputChange}
                  value={countryDetails.name} />
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

export default CountryCreateModal