import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.mainThumb}>
      <NavLink className={css.homeLogo} to="/">
        <ContactPhoneIcon />
        <h1
          className={css.navLink}
          variant="h6"
          noWrap
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontSize: '24px',
            marginLeft: '10px',
          }}
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Fjalla One',
            fontWeight: 600,
            letterSpacing: '.1rem',
          }}
        >
          PhoneBook
        </h1>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts">
          <span className={css.contactsLink}>Contacts</span>
        </NavLink>
      )}
    </div>
  );
};
