import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CountryTableItemAction from './CountryTableItemAction'

const CountryTable = () => {
    const [countryData, setCountryData] = useState([])

    const getCountryData = async () => {
        try {
            const data = await axios.get('/api/country').then((resp) => {
                setCountryData(resp.data);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCountryData();
    },[])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country Code</th>
            <th scope="col">Country Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {countryData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>{item.country_code}</td>
              <td>{item.name}</td>
              <td>
                <CountryTableItemAction 
                  countryId={item.id}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default CountryTable
