import { Stack } from '@mui/material';
import React from 'react';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

const Navibar = () => {
  const isMobileScreen = useCheckMobileScreen();
  return (
    <div>
      {isMobileScreen ?
        <>
        </> :
        <div className="navbar">
          <Stack direction="row" spacing={5} alignItems="center" className="navitext">
            <a href="/jessica-mary/" className="disable-deco">
              <h3 className="navbar-text" >Jessica Mary</h3>
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
            {/* <h3 className="navbar-text">Blogs</h3> */}
          </Stack>
        </div>
      }
    </div>
  );
}

export default Navibar;