import { Box } from '@material-ui/system';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import React from 'react';
import Note from './Note';

const Notifications = ({setIsOpenNotes, showedNotes}) => {

  const button = (message) => {
    return (
      <Paper 
        onClick={() => setIsOpenNotes(false)} 
        sx={{m: 1, p: 1, bgcolor: '#3F7FBF', color: 'white'}} 
        elevation={3} 
      >
        {message}
      </Paper> 
    )
  }

  return (
    <div style={{ position: 'absolute', fontSize: 'small', top: 60, right: -15, zIndex: 2 }}>
      <Box sx={{width: 300, p: 1, bgcolor: '#3F7FBF', borderRadius: 3}} >
        {showedNotes.map(note => {
          return <Note key={note.id} note={note} />
        })}
        
        {showedNotes.length ? button('посмотреть все...') : button('Нет уведомлений')}      
      </Box>
    </div>
  );
};

Notifications.propTypes = {
  setIsOpenNotes: PropTypes.func.isRequired,
  showedNotes: PropTypes.array.isRequired
}

export default Notifications;