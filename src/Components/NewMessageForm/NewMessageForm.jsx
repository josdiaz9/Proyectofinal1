/* import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import './NewMessageForm.css';

const NewMessageForm = ({contact_id}) => {
    const {addNewMessage} = useContext(ContactsContext)
    
    Logica para capturar campos del formulario
    
    function handleSubmitNewMessage(event) {
        event.preventDefault()
        const new_message = event.target.nuevo_mensaje.value
        addNewMessage(contact_id, new_message)
        event.target.reset()
    }


    return (
        <div className="footer-container">
            <form onSubmit={handleSubmitNewMessage} className="message-form">
                <textarea placeholder='Escribe un mensaje...' id='nuevo_mensaje' name='nuevo_mensaje' className="message-input" required />
                <button type='submit' className="send-button">➤</button>
            </form>
        </div>
    )
}

export default NewMessageForm */

import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import './NewMessageForm.css';

const NewMessageForm = ({contact_id}) => {
    const {addNewMessage} = useContext(ContactsContext)
    
    function handleSubmitNewMessage(event) {
        event.preventDefault()
        const text = event.target.nuevo_mensaje.value

        // Creamos el objeto con la forma que definimos en tu data
        const new_message_obj = {
            id: Date.now(), // Genera un ID único temporal
            text: text,
            send_by_me: true,
            is_read: false, // <--- ESTO hará que se vea GRIS
            created_at: new Date().toISOString()
        }

        // Ahora enviamos el objeto, no solo el string
        addNewMessage(contact_id, new_message_obj)
        
        event.target.reset()
    }

    return (
        <div className="footer-container">
            <form onSubmit={handleSubmitNewMessage} className="message-form">
                <textarea 
                    placeholder='Escribe un mensaje...' 
                    id='nuevo_mensaje' 
                    name='nuevo_mensaje' 
                    className="message-input" 
                    required 
                />
                <button type='submit' className="send-button">➤</button>
            </form>
        </div>
    )
}

export default NewMessageForm