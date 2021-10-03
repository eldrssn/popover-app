import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';
import { dateFrom } from '../utils';

const Note = ({note}) => {
  const DATE_INTERVAL_DELAY = 1000;
  const {text, date} = note;
  const [getDate, setGetDate] = useState(dateFrom(date));

  useInterval(() => {
    setGetDate(dateFrom(date))
  }, DATE_INTERVAL_DELAY)

  return (
    <Paper sx={{m: 1, p: 2}} elevation={3} > 
      {text} 
      <Paper sx={{p: 1, fontSize: 10}} >
        {getDate}
      </Paper>
    </Paper>
  );
};

Note.propTypes = {
  note: PropTypes.object
}

export default Note;