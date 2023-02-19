import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.formThumb} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.formTitle}>Log In</h2>
      <input
        className={css.formInput__Email}
        type="email"
        name="email"
        placeholder="Email"
        size="small"
        required
      />
      <input
        className={css.formInput__Password}
        type="password"
        name="password"
        placeholder="Password"
        size="small"
        required
      />
      <button className={css.formButton} type="submit">
        Log In
      </button>
      <p>
        Don't Have An Account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};
