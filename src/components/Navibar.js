import { Stack, Switch } from '@mui/material';
import { useState, useEffect } from 'react';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';
import jmIconBlack from '../images/jm-icon-black.png';

const Navibar = () => {
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
    <div>
      {isMobileScreen ?
        <>
          <div className="naviswitch mobile">
            <Switch 
              className="switch-dark-mode" 
              checked={darkMode}
              onChange={(event) => {
                setDarkMode(event.target.checked);
              }}
            />
          </div>
        </> :
        <div className="navbar">
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={5} alignItems="center" className="navitext">
              <a href="/jessica-mary/" className="navi-bar-icon">
                <img className="icon-small" src={jmIconBlack} alt="jm-icon"></img>
              </a>
              <a href="#experiences" className="disable-deco">
                <h3 className="navbar-text">Experiences</h3>
              </a>
              <a href="#education" className="disable-deco">
                <h3 className="navbar-text">Education</h3>
              </a>
              <a href="#projects" className="disable-deco">
                <h3 className="navbar-text">Projects</h3>
              </a>
              <a href="#certifications" className="disable-deco">
                <h3 className="navbar-text">Certifications</h3>
              </a>
              {/* <h3 className="navbar-text">Blogs</h3> */}
            </Stack>
            <Stack className="naviswitch">
              <Switch
                className="switch-dark-mode" 
                checked={darkMode}
                onChange={(event) => {
                  setDarkMode(event.target.checked);
                }}
              />
            </Stack>
          </Stack>
        </div>
      }
    </div>
  );
}

export default Navibar;