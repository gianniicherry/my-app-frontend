import './App.css';
import React from 'react'
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
