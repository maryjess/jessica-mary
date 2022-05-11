import './App.scss';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Stack } from '@mui/material';
import Navibar from './components/Navibar';

function App() {
  return ([
    <Navibar/>,
    <div className="outest-background">
      <Stack>
        <Home/>
        <Stack direction="row" justifyContent="space-evenly">
          <Experience/>
          <Projects/>
        </Stack>
        <footer><center>&copy; {new Date().getFullYear()} Jessica Mary. All Rights Reserved.</center></footer>
      </Stack>
    </div>
  ]);
}

export default App;
