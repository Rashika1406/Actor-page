import React from 'react'

const Chat = (props) => {
    return (
        <div className='pages'>

            <div className='photolab'>
                <img src={props.pic} alt='dhanush'></img>
            </div>
            <div className='film-actor'>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>

            <div className='emoji'>
                <p>{props.time}</p>
                <p>⭐</p>

            </div>

        </div>
    )
}

export default Chat
