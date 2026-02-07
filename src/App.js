import './App.scss';
import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Navibar from './components/Navibar';
import Certifications from './components/Certifications';
import useCheckMobileScreen from './hooks/useCheckMobileScreen';

function App() {
  const isMobileScreen = useCheckMobileScreen();
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <div className="outest-background">
      <Navibar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode}/>
      <Stack spacing={2}>
        <Experience darkMode={darkMode}/>
        <Education darkMode={darkMode}/>
        <Projects darkMode={darkMode}/>
        <Certifications darkMode={darkMode}/>
        {isMobileScreen ? 
          <footer><center>&copy; {new Date().getFullYear()} Jessica Mary.<br/>All Rights Reserved.</center></footer> :
          <footer><center>&copy; {new Date().getFullYear()} Jessica Mary. All Rights Reserved.</center></footer>}
      </Stack>
    </div>
  );
}

export default App;
