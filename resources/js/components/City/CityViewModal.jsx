import React from 'react'

const CityViewModal = ({modalData, modalId}) => {
  return (
    <div className="modal fade" id={`cityViewModal${modalId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">City Details:</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <strong>id:</strong> {modalData.id} <hr/>
              <strong>Country code:</strong>{modalData.state_id}<hr/>
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

export default CityViewModal
