import React from 'react';
import CSS from './Contacts.module.css';

const ContactsList = ({ contacts, onDelete, isLoading }) => {
  return (
    <ul className={CSS.contact}>
      {contacts.map(({ id, name, number }) => (
        <li className={CSS.contactList} key={id}>
          <p>{name}:</p>
          <p>{number}</p>
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
