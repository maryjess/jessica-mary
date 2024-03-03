import './App.scss';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import { Stack } from '@mui/material';
import Navibar from './components/Navibar';

function App() {
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
        <footer><center>&copy; {new Date().getFullYear()} Jessica Mary. All Rights Reserved.</center></footer>
      </Stack>
    </div>
  );
}

export default App;
