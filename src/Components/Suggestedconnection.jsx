import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'
import "./Suggestedconnection.css"

function Suggestedconnection() {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUser(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError("Something went wrong")
                setLoading(false)
            })

    }, [])

    function connectionHandler(name) {
        alert("Connect with " + name)
    }

    return (
        <div className="suggestedconnections">

            {loading && <p>Loading....</p>}

            <p className="errormessage">{error}</p>
            <h3 className="heding">Suggested Connections</h3>

            {user.slice(0,3).map((person, index) => {
                return (
          <div className="connectioncard" key={index}>

      <h3 className="connectionname">
                  {person.name}
          </h3>

          <p className="connectionemail">
             {person.email}
            </p>

             <button
                className="connectbtn"
                            onClick={() => connectionHandler(person.name)}
                        >
                            Connect
                        </button>

                    </div>
                )
            })}

        </div>
    )
}

export default Suggestedconnection