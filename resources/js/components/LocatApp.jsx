import React from 'react'
import CityCreateModal from './City/CityCreateModal'
import CityTable from './City/CityTable'
import CountryCreateModal from './Country/CountryCreateModal'
import CountryTable from './Country/CountryTable'
import StateCreateModal from './State/StateCreateModal'
import StateTable from './State/StateTable'

const LocatApp = () => {
    return (
        <div className="container">
            <div className="row justify-content-left">
                <p className="h3">Country, State & City Listing</p>
                <div className='col-md-4'>
                    <CountryCreateModal />
                    <div className='card'>
                        <CountryTable />
                    </div>
                </div>

                <div className='col-md-4'>
                    <StateCreateModal />
                    <div className='card'>
                        <StateTable/>
                    </div>
                </div>

                <div className='col-md-4'>
                    <CityCreateModal />
                    <div className='card'>
                        <CityTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocatApp
