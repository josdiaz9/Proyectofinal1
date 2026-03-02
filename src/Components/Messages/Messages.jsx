/*import React from 'react'
import './Messages.css';

const Messages = ({contact_selected}) => {
    if (!contact_selected) return null;
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

export default Messages*/

import React from 'react';
import './Messages.css';

const Messages = ({ contact_selected }) => {
    // Si no hay contacto seleccionado, no renderizamos nada
    if (!contact_selected) return null;

    return (
        <div className="messages-container">
            {contact_selected.messages.map((message) => (
                <div
                    key={message.id}
                    className={`message-row ${message.send_by_me ? 'me' : 'other'}`}
                >
                    <div className="bubble">
                        {/* Texto del mensaje */}
                        <p style={{ margin: 0 }}>{message.text}</p>

                        {/* Info: Hora y Checks (solo para 'me') */}
                        <div className="message-info">
                            <span>
                                {new Date(message.created_at).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </span>

                            { /*Solo mostramos el doble check si el mensaje lo envié yo*/}
                            {message.send_by_me && (
                                <span
                                    className={message.is_read ? "check-blue" : "check-grey"}
                                    style={{ color: message.is_read ? '#53bdeb' : '#8696a0', marginLeft: '4px' }}
                                >
                                    ✓✓
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Messages;