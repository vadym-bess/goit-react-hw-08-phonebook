import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import css from './layout.module.css';

export const Layout = () => {
  return (
    <div
      className={css.layout}
      style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
    >
      <AppBar />
      <Outlet />
    </div>
  );
};
