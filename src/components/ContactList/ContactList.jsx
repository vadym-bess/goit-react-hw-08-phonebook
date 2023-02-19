import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const submit = id => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className={css.modalWrapper}>
            <h2 className={css.modalTitle}>Are you sure?</h2>
            <p>You want to delete this contact?</p>
            <div className={css.buttonWrapper}>
              <button
                className={css.buttonItem}
                type="button"
                onClick={onClose}
              >
                No
              </button>
              <button
                className={css.buttonItem}
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                  toast.success('Success! The contact has been deleted', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  onClose();
                }}
              >
                Yes!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const handleDeleteContact = id => {
    submit(id);
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ul className={css.listWrapper}>
      {filterContacts.map(contact => {
        return (
          <li className={css.listItem} key={nanoid()}>
            <p className={css.contactInfo}>
              {contact.name}: {contact.number}
            </p>
            <button
              className={css.listButton}
              type="button"
              onClick={() => {
                handleDeleteContact(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
