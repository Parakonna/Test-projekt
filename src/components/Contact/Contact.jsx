import css from './Contart.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiUserFill } from 'react-icons/ri';

const Contact = ({ id, name, number, onDeleteProfile }) => {
  return (
    <div className={css.itemData}>
      <div>
        <h3 className={css.name}>
          <RiUserFill /> {name}
        </h3>
        <p className={css.tel}>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteProfile(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
