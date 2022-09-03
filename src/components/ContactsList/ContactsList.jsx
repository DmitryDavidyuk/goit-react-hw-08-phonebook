import React from 'react';
import CSS from './Contacts.module.css';

const ContactsList = ({ contacts, onDelete, isLoading }) => {
  return (
    <ul className={CSS.contact}>
      {contacts.map(({ id, name, phone }) => (
        <li className={CSS.contactList} key={id}>
          <p>{name}:</p>
          <p>{phone}</p>
          <button
            type="button"
            onClick={() => onDelete(id)}
            disabled={isLoading}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
