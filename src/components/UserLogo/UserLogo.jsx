import { useState } from 'react';
import style from './UserLogo.module.css';
/* import axios from 'axios'; */
import UserLogoModal from '../UserLogoModal/UserLogoModal';

export const UserLogo = () => {
  // const dispatch = useDispatch();
  // const userData = useSelector(selectUser);
  const [user, setUser] = useState({
    photo: '',
    name: '',
    email: 'olena@mail.com',
    _id: '1',
  });

  const [isUserModalOpen, setUserModalOpen] = useState(false);

  const getInitial = (name, email) => {
    if (name && name.trim() !== '') {
      return name.trim()[0].toUpperCase();
    } else if (email && email.trim() !== '') {
      const emailName = email.trim().split('@')[0];
      return emailName[0].toUpperCase();
    } else {
      return '';
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const initials = getInitial(user.name || user.email);
  const backgroundColor = getRandomColor();

  const avatarStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    backgroundColor,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  };
  return (
    <div className={style.content}>
      <div className={style.userName}>
        <span>{user.name}</span>
      </div>

      <div className={style.user}>
        {user?.photo ? (
          <img src={user.photo} alt="Avatar" width="28" height="28" />
        ) : (
          <div style={avatarStyle}>{initials}</div>
        )}
      </div>
      <div className={style.btn}>
        <button
          onClick={() => setUserModalOpen(true)}
          type="button"
          className={style.svgBtn}
        >
          <svg className={style.icon} width="12" height="7">
            <use href="/icon/icon.svg#icon-vector"></use>
          </svg>
        </button>
      </div>

      <UserLogoModal
        className={style.userModal}
        isOpen={isUserModalOpen}
        onClose={() => setUserModalOpen(false)}
      />
    </div>
  );
};

export default UserLogo;
