import React from 'react'

import './Profile.css'
function Profile(props) {
    return (
        <div>
        <div className='profilecard'>
            
            <h2>{props.name}</h2>
            <p>Job:{props.job}</p>

            <p>Connection:{props.connection}</p>
        </div></div >
    )
}

export default Profile
