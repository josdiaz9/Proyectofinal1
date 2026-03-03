import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams, Link } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Messages from '../../Components/Messages/Messages'
import './ContactScreen.css'

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const contact_selected = contacts.find(contact => String(contact.id) === String(contact_id))

  return (
    <div className={`app-container ${contact_id ? 'chat-open' : ''}`}>

      <div className="sidebar-container">
        <ContactSidebar />
      </div>

      <div className="chat-window">
        {
          !contact_id ? (
            <div className="no-chat-selected">
              <div className="welcome-container">
                <div className="welcome-icon">💬</div>
                <h2>WhatsApp Web</h2>
                <p>Seleccioná un contacto para comenzar a chatear.</p>
              </div>
            </div>
          ) :
            !contact_selected ? (
              <div className="no-chat-selected">
                {/* Agregamos flecha por si el ID no existe */}
                <Link to="/" className="back-button-mobile">←</Link>
                <h1>El contacto seleccionado no existe</h1>
              </div>
            ) :
              (
                <>
                  <header className="chat-header">
                    {/* LA FLECHITA: Solo aparecerá en celulares por el CSS */}
                    <Link to="/" className="back-button-mobile">←</Link>

                    <img
                      src={contact_selected.profile_picture}
                      alt={contact_selected.name}
                      className="avatar-img-small"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${contact_selected.name}`;
                      }}
                    />
                    <div className="header-info">
                      <h1 className="chat-name">{contact_selected.name}</h1>
                      <span className="last-connection">últ. vez {contact_selected.last_time_connection}</span>
                    </div>
                  </header>

                  <Messages contact_selected={contact_selected} />
                  <NewMessageForm contact_id={contact_id} />
                </>
              )
        }
      </div>
    </div>
  )
  }
