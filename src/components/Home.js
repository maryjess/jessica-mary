// import {useState} from 'react';
// import Icon from './Icon';
import {Stack} from '@mui/material';
import profilePic from '../images/profile-picture.jpg';
import github from '../images/github.png';
import youtube from '../images/youtube.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import Typewriter from 'typewriter-effect/';

const Home = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const toggleLoading = () => {setIsLoading(false)};

  return (
    <body className="background">
      <Stack spacing={3} direction="row" alignItems="center" justifyContent="center">
        <div className="zoom">
          <img className="profile-cropped" src={profilePic} alt="Jessica-Mary"></img>
        </div>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <h1><span className="wave">👋</span></h1>
            <Typewriter
              options={{
                strings: ["Hello there!"],
                delay: 150,
                pauseFor: 3000,
                autoStart: true,
                loop: true,
                skipAddStyles: false,
                cursorClassName: 'cursor',
                wrapperClassName: 'typewriter-wrapper',
              }}
            />
          </Stack>
          <div className="para">
            My name is Jessica, final year student in National University of Singapore, 
            majoring in <strong>Pharmaceutical Science</strong> with a minor in <strong>Computer Science</strong>. 
            Currently I am keen into software engineering, bioinformatics, and pharmaceutical drug development.
            In my free time, I love exploring new things and I am really passionate about music.
          </div>

          <Stack direction="row" spacing={2}>
            <a href="https://github.com/maryjess">
              <img className="icon-small" src={github} alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/jessicalistijo/">
              <img className="icon-small" src={linkedin} alt="linkedin"></img>
            </a>
            <a href="https://www.instagram.com/jessicalistijo">
              <img className="icon-small" src={instagram} alt="instagram"></img>
            </a>
            <a href="https://www.youtube.com/@jessicalistijo">
              <img className="icon-small" src={youtube} alt="youtube"></img>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </body>
  );
}

export default Home;