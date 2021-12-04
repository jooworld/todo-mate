import React from 'react';
import './App.css';
import Info from './Info';
import Date from './Date';
import Feed from './Feed';

const App = () => {
  return (
    <div className="App default-font"> 
        <div style={{ backgroundColor: "green" }}>
          <Info />
          <Date />
        </div>

        <div style={{ backgroundColor: "orange" }}>
          <Feed />
        </div>
    </div>
  );
}

export default App;