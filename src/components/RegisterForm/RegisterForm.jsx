import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.formThumb} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={css.formTitle}>Create An Account</h2>

      <label>
        <input
          className={css.formInput__Name}
          type="text"
          name="name"
          placeholder="Name"
          size="small"
          required
        />
      </label>
      <label>
        <input
          className={css.formInput__Email}
          type="email"
          name="email"
          placeholder="Email"
          size="small"
          required
        />
      </label>
      <label>
        <input
          className={css.formInput__Password}
          type="password"
          name="password"
          placeholder="Password"
          size="small"
          required
        />
      </label>
      <button className={css.formButton} type="submit">
        Register
      </button>
      <p>
        Already Have An Account? <Link to="/login">Sign In</Link>
      </p>
    </form>
  );
};
