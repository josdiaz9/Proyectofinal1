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
                            text: new_message,
                            send_by_me: true,
                            created_at: new Date().toISOString(),
                            is_read: false
                        })
                    }
                }
                return cloned_state
            }
        )
    }
    const sortedContacts = [...contactsState].sort((a, b) => {
        const lastMsgA = new Date(a.messages[a.messages.length - 1].created_at);
        const lastMsgB = new Date(b.messages[b.messages.length - 1].created_at);
        return lastMsgB - lastMsgA;
    });
    const provider_values = {
        contacts: sortedContacts,
        addNewMessage
    }

    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider;