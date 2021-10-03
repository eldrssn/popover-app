import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@material-ui/core';

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider 
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      TransitionComponent={Slide}
    >
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);