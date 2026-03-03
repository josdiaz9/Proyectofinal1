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
