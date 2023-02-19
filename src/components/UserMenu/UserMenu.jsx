import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={css.menuThumb}>
      <p className={css.menuText}>Welcome, {user.email}</p>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt={`${user.name}`}
              src="https://www.shutterstock.com/image-vector/surgeon-doctor-avatar-character-icon-600w-1009872754.jpg"
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center" component="div">
              {
                <div
                  classname={css.menuSettingItem}
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  Logout
                </div>
              }
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};
