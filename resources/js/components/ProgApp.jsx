import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Alerts from './Alerts';

const ProgApp = () => {
    //Batch details
    const [batchId, setBatchId] = useState('');
    const [batchName, setBatchName] = useState('file name..');

    //Progress data
    const [progressData, setProgressData] = useState({});
    const [progressPercent, setProgressPercent] = useState(0);

    //Cancell mech
    const [intervalId, setIntervalId] = useState(0);
    const [cancelled, setCancelled] = useState(false);

    //Error message
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('Message!!');

    const displayAlert = (errx, msgx) => {
        setError(errx);
        setMessage(msgx);
    }

    const getProgress = async() => {
        try {
            const data = await axios.get(`/upload/progress?${batchId}`)
                .then((resp) => {
                    setProgressData(resp.data);
                }).catch((err) => {
                    console.log(err);
                    displayAlert(true,"some error has occured");
                });
        } catch (error) {
            console.log(error)
            displayAlert(true,"some error has occured");
        }
    }

    useEffect(() => {
        const Id = setInterval(() => {
            getProgress();
        }, 2000);

        setIntervalId(Id);

        return () => clearInterval(Id);
    },[]);

    useEffect(() => {
        let totalJobs = parseInt(progressData.total_jobs);
        let doneJobs = totalJobs - parseInt(progressData.pending_jobs);
        let progressPercent = parseInt(((doneJobs/totalJobs)*100));

        setBatchName(progressData.name);

        if(progressData.cancelled_at != null){
            //kill the interval call
            clearInterval(intervalId);
            //disabled the cancell button
            setCancelled(false);
            displayAlert(true,"Upload has already been cancelled..");
            
            setProgressPercent(0)

        }else if (progressPercent === 100) {
            //kill the interval call
            clearInterval(intervalId);
            //disabled the cancell button
            setCancelled(true);
            displayAlert(false,"Upload has completed succesfully..");
            
            setProgressPercent(100)
        } else {
            setProgressPercent(progressPercent )
        }

    },[progressData]);

    const cancelBatch = async (e) =>{
        e.preventDefault();
        try {
            const data = await axios.get(`/upload/cancel?${batchId}`)
                .then((resp) => {
                    //disabled the cancell button
                    setCancelled(true);
                    //kill the interval call
                    clearInterval(intervalId);
                    displayAlert(true,"Upload has been cancelled..");
                }).catch((err) => {
                    console.log(err);
                    displayAlert(true,"some error has occured");
                });
        } catch (error) {
            console.log(error);
            displayAlert(true,"some error has occured");
        }
    }

  return (
    <div className="container">
            <div className="row justify-content-center">
                
                <div className='col-md-7'>
                    <Alerts message={message} type={error}/>
                    <div className="card">
                        <div className="card-header">
                            <p className="h5">Upload Progress</p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{batchName}</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                    role="progressbar" 
                                    aria-valuenow={progressPercent} 
                                    aria-valuemin="0" 
                                    aria-valuemax="100" 
                                    style={{ width: `${progressPercent}%` }}>
                                        {progressPercent}%
                                    </div>
                            </div>
                            <hr/>
                            <button 
                                className="btn btn-primary" 
                                disabled={cancelled}
                                onClick={cancelBatch}>Cancel Upload</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProgApp