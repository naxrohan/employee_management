import React from 'react'

const CountryViewModal = ({modalData, modalId}) => {
  return (
    <div className="modal fade" id={`countryViewModal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Country Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <strong>id:</strong> {modalData.id} <hr/>
              <strong>Country code:</strong>{modalData.country_code}<hr/>
              <strong>Country name:</strong>{modalData.name}<hr/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CountryViewModal
