import './App.scss';
import { Stack } from '@mui/material';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Navibar from './components/Navibar';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';

function App() {
  const isMobileScreen = useCheckMobileScreen();
  return (
    // <div className="container">
    //   <div className="sliding-background">
    //   </div>
    // </div>
    <div className="outest-background">
      <Navibar/>
      <Home/>
      <Stack spacing={2}>
        <Experience/>
        <Education/>
        <Projects/>
        {isMobileScreen ? 
          <footer><center>&copy; {new Date().getFullYear()} Jessica Mary.<br></br>All Rights Reserved.</center></footer> :
          <footer><center>&copy; {new Date().getFullYear()} Jessica Mary. All Rights Reserved.</center></footer>}
      </Stack>
    </div>
  );
}

export default App;
