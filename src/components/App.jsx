import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Contacts } from '../pages/Contacts/Contacts';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </>
    )
  );
};
