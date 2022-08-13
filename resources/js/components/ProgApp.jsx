import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProgApp = () => {
    const [batchId, setBatchId] = useState('');
    const [batchName, setBatchName] = useState('file name..');
    const [progressData, setProgressData] = useState({});
    const [progressPercent, setProgressPercent] = useState(0);
    const [intervalId, setIntervalId] = useState(0);


    const getProgress = async() => {
        try {
            const data = await axios.get(`/upload/progress?${batchId}`)
                .then((resp) => {
                    setProgressData(resp.data);
                }).catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error)
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

        if (progressPercent === 100) {
            clearInterval(intervalId);
        }

        setBatchName(progressData.name);
        setProgressPercent(progressPercent )
    },[progressData]);

    const cancelBatch = async (e) =>{
        e.preventDefault();
        try {
            const data = await axios.get(`/upload/cancel?${batchId}`)
                .then((resp) => {
                    console.log(resp.data);
                }).catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="container">
            <div className="row justify-content-center">
                
                <div className='col-md-7'>
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
                        <a href="#" className="btn btn-primary" onClick={cancelBatch}>Cancel Upload</a>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default ProgApp