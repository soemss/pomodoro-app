import './App.css';
import Settings from './comp/settings/settings';
import Timer from './comp/timer/timer';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Timer/>
        {/* <Settings/> */}
      </StyledEngineProvider>
    </div>
  );
}

export default App;
