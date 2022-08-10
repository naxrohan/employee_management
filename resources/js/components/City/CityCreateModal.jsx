import React, { useState, useEffect } from 'react'
import Alerts from '../Alerts';

const CityCreateModal = () => {
  const [cityDetails, setCityDetails] = useState({
    id: 0,
    state_id: '',
    name: '',
});
const [statesData, setStatesData] = useState([])

const [error, setError] = useState(null);
const [message, setMessage] = useState('Message!!');

const getStatesData = async () => {
  try {
    const data = await axios.get('/state').then((resp) => {
      setStatesData(resp.data);
    })
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getStatesData();
}, [])

const handleInputChange = (e) => {
    setCityDetails(prev => {
        return { ...prev, [e.target.name]: e.target.value }
    })
}

const handleUpdate = async (e) => {
e.preventDefault();

  const data = await axios.post(`/city`,{
    ...cityDetails
  }).then((resp) =>{
    setCityDetails(resp.data);

    setError(false);
    setMessage("New City saved!!");
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
                      data-bs-target={`#createCityModal`}>Create City</button>
              {/* </div> */}
          </div>
        
    <div className="modal fade" id={`createCityModal`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New City Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <div className="modal-body">
            
              <Alerts message={message} type={error}/>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1x">State Name</span>
                <select className="form-control" 
                  name='state_id'
                  onChange={handleInputChange} >
                    <option>--select state --</option>
                  { statesData.map( (item, key) => (
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
                onClick={(e) => handleUpdate(e)}>Save New</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CityCreateModal
