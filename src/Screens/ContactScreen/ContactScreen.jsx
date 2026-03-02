import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Messages from '../../Components/Messages/Messages'
import './ContactScreen.css'

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext)

  //Obtengo el id del contacto seleccionado a traves de los parametros de la url
  const { contact_id } = useParams()

  //Busco el contacto seleccionado en la lista de contactos
  //const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))
  const contact_selected = contacts.find(contact => String(contact.id) === String(contact_id))
  console.log("Datos del contacto:", contact_selected);
  return (
    <div className="chat-interface">
      <div className="sidebar-container">
        <ContactSidebar />
      </div>
      {/* Si el contacto seleccionado no existe, muestro un mensaje si no, muestro el contacto */}
      <div className="chat-window">
        {
          /* 1. CASO INICIO: Si NO hay id en la URL (Página recién cargada) */
          !contact_id ? (
            <div className="no-chat-selected">
              <div className="welcome-container">
                <div className="welcome-icon">💬</div>
                <h2>WhatsApp Web</h2>
                <p>Seleccioná un contacto para comenzar a chatear.</p>
              </div>
            </div>
          ) :

            /* 2. CASO ERROR (LO DEL PROFE): Si hay ID pero no encontramos al usuario */
            !contact_selected ? (
              <div className="no-chat-selected">
                <h1>El contacto seleccionado no existe</h1>
              </div>
            ) :

              /* 3. CASO ÉXITO: Hay ID y el usuario existe, mostramos el chat */
              (
                <>
                  <header className="chat-header">
                    <img
                      src={contact_selected.profile_picture} // <--- CAMBIÁ thumbnail POR profile_picture
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

                  {/* El área de mensajes y el form se quedan igual */}
                  <Messages contact_selected={contact_selected} />
                  <NewMessageForm contact_id={contact_id} />
                </>
              )
        }

      </div>
    </div>
  )
}

/* { esto en el chat window
          ! contact_selected 
          ? <div className="no-chat-selected">
            <h1>El contacto seleccionado no existe</h1>
            </div>
          : <>
          <header className="chat-header">
                <img src={contact_selected.thumbnail} alt="" className="avatar-img-small" />
                <h1>{contact_selected.name}</h1>
              </header>
          <Messages contact_selected={contact_selected} />
          <NewMessageForm contact_id={contact_id} />
        </>
      }*/

/*<> en la parte final
                  <header className="chat-header">
                    <img src={contact_selected.thumbnail} alt="" className="avatar-img-small" />
                    <h1>{contact_selected.name}</h1>
                  </header>
                  <Messages contact_selected={contact_selected} />
                  <NewMessageForm contact_id={contact_id} />
                </>
                */