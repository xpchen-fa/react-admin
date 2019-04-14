import React from "react";
import { Provider } from 'react-redux';

import store from '@/store/index';
import Router from '@/router';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}
export default App;
