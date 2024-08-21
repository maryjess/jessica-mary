import {Stack} from '@mui/material';
import profilePic from '../images/jessica-profile.png';
import github from '../images/github.png';
import youtube from '../images/youtube.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import tiktok from '../images/tiktok.png';
import medium from '../images/medium.png';
import discord from '../images/discord.png';
import Typewriter from 'typewriter-effect/';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

const Home = () => {
  const isMobileScreen = useCheckMobileScreen();
  return (
    <body className="background">
      <Stack spacing={3} direction={isMobileScreen ? "column" : "row"} alignItems="center" justifyContent="center">
        <div className="zoom">
          <img className="profile-cropped" src={profilePic} alt="Jessica-Mary"></img>
        </div>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} justifyContent={isMobileScreen ? "center" : "flex-start"}>
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
            My name is Jessica, freshly graduated from <strong>NUS Pharmaceutical Science </strong>
            &#8212; though my interest lies more towards <strong>Computer Science </strong>
            &#8212; which led me to graduate with a minor.<p><br/></p>
            Currently, I love creating <strong>stuffs</strong> that help people.
            In my free time, I enjoy exploring new things and I am really passionate about music.
          </div>

            <Stack direction="row" spacing={2} justifyContent={isMobileScreen ? "center" : "flex-start"}>
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
              <a href="https://tiktok.com/@jessicalistijo">
                <img className="icon-small" src={tiktok} alt="tiktok"></img>
              </a>
              <a href="https://medium.com/@jessicalistijo">
                <img className="icon-small" src={medium} alt="medium"></img>
              </a>
              <a href="https://discordapp.com/users/hellojxss">
                <img className="icon-small" src={discord} alt="discord"></img>
              </a>
            </Stack>
        </Stack>
      </Stack>
    </body>
  );
}

export default Home;