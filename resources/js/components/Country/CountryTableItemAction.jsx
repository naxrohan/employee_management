import axios from 'axios'
import React, { useState } from 'react'
import CountryEditModal from './CountryEditModal'
import CountryViewModal from './CountryViewModal'

const CountryTableItemAction = ({countryId}) => {
  const [countData, setCountryData] = useState({
    id: 0,
    country_code: 'null',
    name: 'null',
})

const getCountryData = async(id) => {
    try {
        const data = await axios.get(`/country/${id}`).then((resp) =>{
          setCountryData(resp.data);
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
                data-bs-target={`#countryViewModal${countryId}`}
                onClick={() => getCountryData(countryId)}>View</button>
              <CountryViewModal modalId={countryId} modalData={countData} />
            
            <button 
                className="btn btn-primary btn-sm" 
                href="#" 
                role="button"
                data-bs-toggle="modal" 
                data-bs-target={`#countryEditModal${countryId}`}
                onClick={() => getCountryData(countryId)}>Edit</button>
              <CountryEditModal modalId={countryId} modalData={countData} />
        </div>
    </div>
  )
}

export default CountryTableItemAction
