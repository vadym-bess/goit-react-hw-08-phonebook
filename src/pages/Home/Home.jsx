import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.maimThumb}>
      <h2 className={css.title}>Welcome to PhoneBook App</h2>
      <div className={css.infoThumb}>
        <div>
          <p className={css.infoItem}>
            In order to use the application, you need to log in or register.
            <br />
            <span className={css.prompt}>Login</span>: qwerty@mail.com <br />
            <span className={css.prompt}>Password</span>: qwerty123
          </p>
          {!isLoggedIn && (
            <ul className={css.btnList}>
              <li>
                <Link className={css.heroButton} to="/login">
                  Log In
                </Link>
              </li>
              <li>
                <Link className={css.heroButton} to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
