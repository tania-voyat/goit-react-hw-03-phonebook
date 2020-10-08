import React from "react";
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        {name}: {number}
        <button type="button" onClick={() => onRemoveContact(id)} className={styles.button}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactsList;
