import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactsForm from '../../components/ContactsForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import { contactsOperations, contactsSelectors } from '../../Redux/contacts';
import 'react-toastify/dist/ReactToastify.css';
import CSS from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} вже в контактах.`);
    } else if (contacts.find(contact => contact.number === number)) {
      toast.error(`${number} вже в контактах.`);
    } else if (name.trim() === '' || number.trim() === '') {
      toast.error("Введіть ім'я та номер телефону контакту!");
    } else {
      dispatch(contactsOperations.addContact(name, number));
      toast.success('Контакт додано!');
    }
  };

  return (
    <div className={CSS.section}>
      <div className={CSS.container}>
        <h1>Телефонна книга</h1>
        <ContactsForm onSubmit={addContact} />
        <div className={CSS.contacts}>
          <h2>Контакти</h2>
          <Filter />
          {contacts && (
            <ContactsList
              contacts={contacts}
              onDelete={onDeleteContact}
              isLoading={contactsSelectors.isLoading}
            />
          )}
        </div>
        <ToastContainer position="top-left" autoClose={2000} />
      </div>
    </div>
  );
}
