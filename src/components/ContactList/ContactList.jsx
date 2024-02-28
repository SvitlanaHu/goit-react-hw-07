import styles from './ContactList.module.css';
import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";


export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
        <div className={styles.container}>
            <ul className={styles.contact}>
                {filteredContacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                ))}    
            </ul> 
        </div>
    );
}