import React from 'react'

/**
 * 
 * @param {message} message to be displayed 
 * @param {type} null | true | false
 * @returns 
 */
const Alerts = ({message, type}) => {

    const showAlert = type === null ? 'none' : 'block';
    const typeAlert = type === false ? 'success' : 'danger';

    return (
        <div style={{ 'display': showAlert }} className={`alert alert-${typeAlert}`} role="alert">
            {message}
        </div>
    )
}

export default Alerts
