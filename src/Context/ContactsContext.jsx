import { createContext, useState } from "react";
import { getContacts } from "../services/contactsService";

export const ContactsContext = createContext(
    {
        contacts: [],
        addNewMessage: (contact_id, new_message) => { }
    }
)

const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)

    function addNewMessage(contact_id, new_message) {
        setContactsState(
            (currentContactState) => {
                const cloned_state = [...currentContactState]

                for (const contact of cloned_state) {
                    if (Number(contact.id) === Number(contact_id)) {
                        contact.messages.push({
                            id: Date.now(),
                            text: new_message_text, // El texto plano que viene del Form
                            send_by_me: true,
                            created_at: new Date().toISOString(),
                            is_read: false // <--- Esto hará que se vea GRIS
                        })
                    }
                }
                return cloned_state
            }
        )
    }

    // Aquí borré el favorite_name
    const provider_values = {
        contacts: contactsState,
        addNewMessage
    }

    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider;