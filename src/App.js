import './App.css';
import React, {useEffect, useState} from 'react'
import Form from './Form.js';
import BandShows from './BandShows';



function App() {


  return (
    <div className="App">
      <h1>UGLY RECORDS</h1>
     <div>
       <h1>Upcoming Events</h1>
        <BandShows />
     </div>
    </div>
  );
}

export default App;
