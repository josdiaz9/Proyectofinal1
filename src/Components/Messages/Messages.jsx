import React from 'react'
import './Messages.css';

const Messages = ({contact_selected}) => {
    return (
        <div className='messages-container'>
            {
                contact_selected.messages.map(message => {
                    return (
                        <div key={message.id} className={`message-row ${message.send_by_me ? 'me' : 'other'}`}>
                            {
                                message.send_by_me
                                    ? <h3></h3>
                                    : <h3></h3>
                            }
                            <div className="bubble">
                            <p>{message.text}</p>
                            <span>{message.time}</span>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Messages