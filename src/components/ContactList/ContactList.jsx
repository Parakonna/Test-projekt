import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlise';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

  const onDeleteProfile = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contacts.map(profileItem => {
        return (
          <li key={profileItem.id} className={css.item}>
            <Contact
              id={profileItem.id}
              name={profileItem.name}
              number={profileItem.number}
              onDeleteProfile={onDeleteProfile}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
