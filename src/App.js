import './App.css';
import Settings from './comp/settings/settings';
import Timer from './comp/timer/timer';
import { StyledEngineProvider } from '@mui/material';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect } from 'react';
import Spotify from 'react-spotify-embed';

function App() {
  const handle = useFullScreenHandle();
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  const detectKeyDown = (e) => {
    if (e.key === 'f') {
      handle.enter();
    }
  }
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <FullScreen handle={handle}>
          <Timer/>
          {/* <Settings/> */}
          <Spotify className='spotify' wide link='https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=a2d073683b1f49ad'/>
        </FullScreen>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
