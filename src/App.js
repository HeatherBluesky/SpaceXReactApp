import React from 'react'
import SpaceXContainer from './containers/SpaceXContainer';
import Sound from 'react-sound';
import spacesynthwave from '../src/spacesynthwave.mp3'

import './App.css';

function App() {
  return (
    <div className="App">
      <Sound
      url={spacesynthwave} 
      playStatus={Sound.status.PLAYING}
      loop={true}
      muted={false}
      />
      <SpaceXContainer/>
    </div>
  );
}

export default App;
