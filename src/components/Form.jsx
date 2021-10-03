import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/system';
import PropTypes from 'prop-types';
import { Button} from '@mui/material';
import React, { useState } from 'react';
import { getID } from '../utils';

const Form = ({setIsHandleAddNote, newEvent, setNewEvent}) => {

  const [text, setText] = useState('')

  const onChangeText = (evt) => {
    setNewEvent({
      id: getID(), 
      text: evt.target.value,
      date: new Date()
    })
    setText(evt.target.value);
  }
  
  const onClickButton = (evt) => {
    if (newEvent.text) {
      setIsHandleAddNote(true);
      setText('');
    }
  }

  return (
    <Box sx={{ mt: 30, p: 2, display: 'flex'}} >
      <TextField 
        fullWidth 
        label="Введите название события" 
        value={text}
        onChange={onChangeText}
      />
      <Button 
        onClick={onClickButton} 
        sx={{ ml: 2}} 
        variant="contained"
      >
        Отправить
      </Button>
    </Box>
  );
};

Form.propTypes = {
  setIsHandleAddNote: PropTypes.func.isRequired,
  newEvent: PropTypes.object.isRequired,
  setNewEvent:  PropTypes.func.isRequired
}

export default Form;