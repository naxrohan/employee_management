import axios from 'axios'
import React, { useState } from 'react'
import StateEditModal from './StateEditModal'
import StateViewModal from './StateViewModal'

const StateTableItemAction = ({stateId}) => {
  const [stateData, setStateData] = useState({
    id: 0,
    country_id: 'null',
    name: 'null',
});
const [countryDetails, setCountryData] = useState([]);

const getStateData = async(id) => {
    try {
        const data = await axios.get(`/state/${id}`).then((resp) =>{
          setStateData(resp.data.state);
          setCountryData(resp.data.countries);
        })
      } catch (error) {
        console.log(error)
      }
}

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
            <button 
                className="btn btn-secondary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#stateViewModal${stateId}`}
                onClick={() => getStateData(stateId)}>View</button>
              <StateViewModal modalId={stateId} modalData={stateData} />
            
            <button 
                className="btn btn-primary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#stateEditModal${stateId}`}
                onClick={() => getStateData(stateId)}>Edit</button>
              <StateEditModal modalId={stateId} modalData={stateData} countData={countryDetails} />
          
        </div>
    </div>
  )
}

export default StateTableItemAction
