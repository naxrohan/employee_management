import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StateTableItemAction from './StateTableItemAction'

const StateTable = () => {
    const [statesData, setStatesData] = useState([])

    const getStatesData = async () => {
        try {
            const data = await axios.get('/api/state').then((resp) => {
                setStatesData(resp.data);
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStatesData();
    }, [])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">country ID</th>
            <th scope="col">State Name</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {statesData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>{item.country_id}</td>
              <td>{item.name}</td>
              <td>
                <StateTableItemAction
                  stateId={item.id}/>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default StateTable
