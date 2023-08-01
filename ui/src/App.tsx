import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Part from './components/Part'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Part/>
      </div>
    </Provider>
  );
}

export default App;
