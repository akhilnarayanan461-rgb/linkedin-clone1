import React from 'react'
import './Jobs.css'
import Navbar from '../Components/Navbar'

function Jobs() {
    const jobss = [
        {
            job: "webdevelopment",
            Company: "AIT job",
            Location: "Dubai"
        },
        {
            job: "React Developer",
            Company: "Teach wings",
            Location: "Abudabi"
        },
        {
            job: "Fullstack Developer",
            Company: "Teach tune",
            Location: "Dubai"
        }
    ]

    function jobHandler(jobName) {
        alert("Applied for " + jobName)
    }

    return (
        <div>
            <Navbar />

            <h1>Jobs</h1>
            <span>Available jobs</span>

            <div className="jobscontainer">

                {jobss.map((category, index) => {
                    return (
                        <div className="jobcard" key={index}>

                            <p>Job: {category.job}</p>
                            <p>Company: {category.Company}</p>
                            <p>Location: {category.Location}</p>

                            <button
                                className="applybtn"
                                onClick={() => jobHandler(category.job)}
                            >
                                Apply
                            </button>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Jobs