import { AppBar, IconButton, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Notification from '@mui/icons-material/Notifications';
import { Badge, Toolbar } from '@mui/material';
import React from 'react';
import Notifications from './Notifications';

const Header = ({count, isOpenNotes, setIsOpenNotes, showedNotes}) => { 

  const onClickNotification = () => {
    setIsOpenNotes(!isOpenNotes);
  }

  return (
    <AppBar
      position="static"
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{flexGrow: 1}}
        >
          Popover App
        </Typography>
        <IconButton 
          size="large"
          color="inherit"
        >
          <Badge aria-label="reduce" badgeContent={count} color="secondary">
            <Notification style={{position: 'relative'}} onClick={onClickNotification} />
          </Badge>
        {isOpenNotes && <Notifications showedNotes={showedNotes} setIsOpenNotes={setIsOpenNotes} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  count: PropTypes.number.isRequired,
  isOpenNotes: PropTypes.bool.isRequired,
  setIsOpenNotes: PropTypes.func.isRequired, 
  showedNotes: PropTypes.array.isRequired
}

export default Header;