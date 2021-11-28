import React from 'react';
import './App.css';
import Info from './Info';
import Date from './Date';
import Feed from './Feed';

const App = () => {
  return (
    <div className="App default-font">
        <div>
          <Info />
          <Date />
        </div>
        <Feed />
    </div>
  );
}

export default App;