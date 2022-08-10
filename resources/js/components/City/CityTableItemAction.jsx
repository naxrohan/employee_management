import axios from 'axios'
import React, { useState } from 'react'
import CityEditModal from './CityEditModal'
import CityViewModal from './CityViewModal'

const CityTableItemAction = ({cityId}) => {
  const [cityData, setCityData] = useState({
    id: 0,
    country_code: 'null',
    name: 'null',
});
const [stateDetails, setStateData] = useState([]);

const getCityData = async(id) => {
    try {
        const data = await axios.get(`/api/city/${id}`).then((resp) =>{
          setCityData(resp.data.city);
          setStateData(resp.data.states)
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
                data-bs-target={`#cityViewModal${cityId}`}
                onClick={() => getCityData(cityId)}>View</button>
              <CityViewModal modalId={cityId} modalData={cityData} />
            
            <button 
                className="btn btn-primary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#cityEditModal${cityId}`}
                onClick={() => getCityData(cityId)}>Edit</button>
              <CityEditModal modalId={cityId} modalData={cityData} stateData={stateDetails}/>
            
        </div>
    </div>
  )
}

export default CityTableItemAction
