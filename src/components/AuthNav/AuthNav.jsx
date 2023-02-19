import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <Link className={css.navLink} to="/register">
        Register
      </Link>
      <Link className={css.navLink} to="/login">
        Log In
      </Link>
    </div>
  );
};
