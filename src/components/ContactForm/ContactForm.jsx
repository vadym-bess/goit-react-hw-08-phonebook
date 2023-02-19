import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import css from './ContactForm.module.css';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleNameChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmitBtn = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      return toast.warn(`${name} is already in contacts.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.wrapper}>
      <h2>Add Contact</h2>
      <form className={css.contactForm} onSubmit={handleSubmitBtn}>
        <label className={css.contactLabel}>
          Name
          <input
            className={css.contactInput}
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contactLabel}>
          Number
          <input
            className={css.contactInput}
            type="tel"
            name="number"
            value={number}
            onChange={handleNameChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.contactButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
