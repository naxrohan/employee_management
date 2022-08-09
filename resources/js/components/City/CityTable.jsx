import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CityTableItemAction from './CityTableItemAction'

const CityTable = () => {
    const [cityData, setCityData] = useState([])

    const getCityData = async () => {
        try {
            const data = await axios.get('/city').then((resp) => {
                setCityData(resp.data);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCityData();
    }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">State Id</th>
            <th scope="col">State Name</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {cityData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>{item.state_id}</td>
              <td>{item.name}</td>
              <td>
                <CityTableItemAction 
                  cityId={item.id}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default CityTable
