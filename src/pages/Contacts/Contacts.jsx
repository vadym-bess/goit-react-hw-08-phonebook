import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import css from './contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsThumb}>
      <div>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
