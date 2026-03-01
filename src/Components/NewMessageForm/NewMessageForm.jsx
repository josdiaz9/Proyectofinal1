import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import './NewMessageForm.css';

const NewMessageForm = ({contact_id}) => {
    const {addNewMessage} = useContext(ContactsContext)
    /* 
    Logica para capturar campos del formulario
    */
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

export default NewMessageForm
