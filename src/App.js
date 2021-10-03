import { Container } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Buttons from './components/Buttons';
import Form from './components/Form';
import Header from './components/Header';
import { notifications } from './notifications';
import { bindActionCreators } from 'redux';
import * as actionCreators from './action-creators/index';
import useInterval from './hooks/useInterval';
import { getID, defaultEvent, getRandomItem } from './utils';

function App() {
  const ADD_EVENT_INTERVAL = 3000;

  const notes = useSelector((state) => state);
  let [count, setCount] = useState(0); 
  const [newEvent, setNewEvent] = useState(defaultEvent);
  const [isHandleAddNote, setIsHandleAddNote] = useState(false);
  const [isOpenNotes, setIsOpenNotes] = useState(false);
  const [showedNotes, setShowedNotes] = useState([]);

  const dispatch = useDispatch();                                   
  const { addEvent, deleteEvents } = bindActionCreators(actionCreators, dispatch); 
  
  const { enqueueSnackbar } = useSnackbar(); 

  useEffect(() => {
    setShowedNotes(notes.slice(-5).reverse());
  }, [notes])

  const pushEvent = (event) => {
    addEvent(event);
    enqueueSnackbar(event.text, { 
      variant: 'info',
      autoHideDuration: 3000,
    });
    setCount(count += 1);
  }

  const getRandomEvent = (arr) => {
    pushEvent({
      text: getRandomItem(arr).text, 
      id: getID(),
      date: new Date()
    })
  }

  const onHandleAddNote = (event) => {
    pushEvent(event);
    setIsHandleAddNote(false);
  }

  useInterval(() => {
    (isHandleAddNote) ? onHandleAddNote(newEvent) : getRandomEvent(notifications);
  }, ADD_EVENT_INTERVAL)

  return (
    <Container maxWidth="md">
      <Header 
        count={count} 
        isOpenNotes={isOpenNotes} 
        setIsOpenNotes={setIsOpenNotes} 
        showedNotes={showedNotes}
        
      />
      <Form 
        setIsHandleAddNote={setIsHandleAddNote} 
        newEvent={newEvent} 
        setNewEvent={setNewEvent} 
      />
      <Buttons 
        setIsOpenNotes={setIsOpenNotes} 
        isOpenNotes={isOpenNotes} 
        deleteEvents={deleteEvents} 
        setCount={setCount}
        setShowedNotes={setShowedNotes}
      />
    </Container>
  );
}

export default App;
