import axios from 'axios'
import React from 'react'

const UserTableItemAction = ({ userId }) => {

    const getUserData = async (id) => {
        try {
            const data = await axios.get(`/users/${id}`).then((resp) =>{
                // setEmpData(resp.data);
                console.log(resp.data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="btn-group" role="group" aria-label="Basic example">

            <button
                className="btn btn-secondary btn-sm"
                href="#"
                role="button"
                // data-bs-toggle="modal"
                // data-bs-target={`#viewModal${userId}`}
                onClick={() => getUserData(userId)}>View</button>
            {/* Todo: Add the edit & view Modals */}

            <button
                className="btn btn-primary btn-sm"
                href="#"
                role="button"
                // data-bs-toggle="modal"
                // data-bs-target={`#editModal${userId}`}
                onClick={() => getUserData(userId)}>Edit</button>

        </div>
    )
}

export default UserTableItemAction
