export const addEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_EVENT',
      payload: event
    })
  }
}

export const deleteEvents = () => {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_EVENTS'
    })
  }
}