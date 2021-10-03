import { Box } from '@material-ui/system';
import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const NewButton = ({text, onClicked}) => {
  return (
    <Box sx={{p: 2}}>
      <Button sx={{p: 2}} fullWidth label={text} variant="contained" onClick={onClicked} >{text}</Button>
    </Box>
  );
};

NewButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired
}

export default NewButton;