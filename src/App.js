import './App.scss';
import Home from './components/Home';
import Cover from './components/Cover';
import Experience from './components/Experience';
import { Stack } from '@mui/material';
import Navibar from './components/Navibar';

function App() {
  return ([
    <Navibar/>,
    <Stack>
      <Home/>
      <Experience/>
      <Cover/>
      <footer><center>&copy; {new Date().getFullYear()} Jessica Mary. All Rights Reserved.</center></footer>
    </Stack>
    ]);
}

export default App;
