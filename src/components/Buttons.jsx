import React from 'react';
import NewButton from './NewButton';
import PropTypes from 'prop-types';

const Buttons = ({deleteEvents, isOpenNotes, setIsOpenNotes, setCount, setShowedNotes}) => {

  const onDeleteButton = () => {
    deleteEvents();
    setCount(0);
  }

  const onReadButton = () => {
    setCount(0);
    setShowedNotes([])
  }

  return (
    <>
      <NewButton 
        onClicked={onReadButton} 
        text='Пометить все события прочитанными' 
      />
      <NewButton 
        onClicked={onDeleteButton} 
        text='Удалить все события' 
      />
      <NewButton 
        onClicked={()=> setIsOpenNotes(!isOpenNotes)} 
        text='Скрыть / показать попап нотификаций' 
      />
    </>
  );
};

Buttons.propTypes = {
  deleteEvents: PropTypes.func.isRequired,
  isOpenNotes: PropTypes.bool.isRequired,
  setCount: PropTypes.func.isRequired, 
  setShowedNotes: PropTypes.func.isRequired
}

export default Buttons;