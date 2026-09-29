import React from 'react'
import Navbar from '../Components/Navbar'
import './Notification.css'

function Notification() {

    const notifications = [
        "Akhil i liked your post",
        "Arun Send your connection request",
        "Teach Wings Posted a new React Developer Job"
    ]

    return (
        <div>
            <Navbar />

            <div className="notificationcontainer">

                <h1 className="notificationtitle">Notification</h1>

                {notifications.map((notify, index) => {
                    return (
                        <div className="notificationcard" key={index}>
                            <p>{notify}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Notification