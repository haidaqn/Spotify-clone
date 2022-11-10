import './index.css';

import {useState, useEffect} from "react"

import Navbar from './components/Navbar';
import DetailSongs from './components/DetailSongs';
import ListSongs from './components/ListSongs';
import Layer from './components/Layer';

import { Songs } from './Context'
import DataSongs from './data/songs.json'

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (id) => {
    const song = DataSongs.find(song => song.id === id);
    
    if (song) {
      setSong(song)
    }

  }

  return (
    <div className="App">
      <Songs.Provider value={ {DataSongs, song, handleSetSong} } >
        <Navbar />
        <div className='h-screen-nav-player grid grid-cols-3 bg-slate-700 overflow-hidden'>
          <DetailSongs />
          <ListSongs />
        </div>
        <Layer />
      </Songs.Provider>
    </div>
  );
}

export default App;
