import React from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './screens';

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
