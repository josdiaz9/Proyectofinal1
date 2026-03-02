/*import React, { useContext } from 'react'
import { getContacts } from '../../services/contactsService'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'

export default function ContactSidebar() {
    //useContext es un hook que nos permite consumir el contexto
    //Recibe por parametro el contexto que queremos consumir
    //Una vez consumido me traera el valor del value del contexto
    const { contacts, favorite_name } = useContext(ContactsContext)
  return (
    <div>
        <h2>Wassap</h2>
        <div>
            {
                contacts.map(
                    (contact ) => {
                        return (
                            <Link 
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                
                            >
                                <img 
                                    src={contact.profile_picture} 
                                    alt={contact.name} 
                                    style={
                                        {
                                            width: '200px'
                                        }
                                    }
                                />
                                <h3>{contact.name}</h3>
                                <span>{contact.last_time_connection}</span>
                                <br />
                                <hr />
                            </Link>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}*/

/*import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'
import './ContactSidebar.css' // Asegurate de que el CSS esté importado

export default function ContactSidebar() {
    const { contacts } = useContext(ContactsContext)

    return (
        <div className="sidebar-content">
            <header className="sidebar-header">
                <h2>Chats</h2>
            </header>

            <div className="contacts-list">
                {contacts.map((contact) => {
                    return (
                        <Link
                            to={`/contact/${contact.id}`}
                            key={contact.id}
                            className="contact-item" // Le agregamos la clase aquí
                        >
                            {}
                            <img
                                src={contact.profile_picture}
                                alt={contact.name}
                                className="contact-avatar"
                            />

                            {}
                            <div className="contact-info">
                                <div className="contact-header-row">
                                    <span className="contact-name">{contact.name}</span>
                                    <span className="contact-time">20:15</span>
                                </div>
                                <span className="contact-status">
                                    {contact.last_time_connection}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}*/

import React, { useContext, useState } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'
import './ContactSidebar.css'
import Searchbar from '../Searchbar/Searchbar';

export default function ContactSidebar() {
    const { contacts } = useContext(ContactsContext)
    const [searchTerm, setSearchTerm] = useState("");
    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="sidebar-content">
            <header className="sidebar-header">
                <h2>Chats</h2>
            </header>
            <Searchbar onSearch={setSearchTerm} />

            <div className="contacts-list">
                {filteredContacts.map((contact) => {
                    const lastMsg = contact.messages[contact.messages.length - 1];

                    return (
                        <Link
                            to={`/contact/${contact.id}`}
                            key={contact.id}
                            className="contact-item"
                        >
                            {/* Foto de perfil */}
                            <img
                                src={contact.profile_picture}
                                alt={contact.name}
                                className="contact-avatar"
                            />

                            {/* Contenedor de info */}
                            <div className="contact-info">
                                <div className="contact-header-row">
                                    <span className="contact-name">{contact.name}</span>
                                    
                                    {/* 2. Muestra la HORA REAL del último mensaje */}
                                    <span className="contact-time">
                                        {new Date(lastMsg.created_at).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </span>
                                </div>

                                <div className="contact-last-msg-row">
                                    {/* 3. Muestra CHECKS solo si el último mensaje lo enviaste vos */}
                                    {lastMsg.send_by_me && (
                                        <span 
                                            className="sidebar-check" 
                                            style={{ color: lastMsg.is_read ? '#53bdeb' : '#8696a0' }}
                                        >
                                            ✓✓
                                        </span>
                                    )}
                                    
                                    {/* 4. Muestra el texto del ÚLTIMO MENSAJE */}
                                    <span className="contact-last-text">
                                        {lastMsg.text}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
