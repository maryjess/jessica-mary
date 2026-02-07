import {Stack} from '@mui/material';
import profilePic from '../images/jessica-profile.png';
import github from '../images/github.png';
import github_white from '../images/github-white.png';
import youtube from '../images/youtube.png';
import youtube_white from '../images/youtube-white.png';
import linkedin from '../images/linkedin.png';
import linkedin_white from '../images/linkedin-white.png';
import instagram from '../images/instagram.png';
import instagram_white from '../images/instagram-white.png';
import tiktok from '../images/tiktok.png';
import tiktok_white from '../images/tiktok-white.png';
import medium from '../images/medium.png';
import medium_white from '../images/medium-white.png';
import discord from '../images/discord.png';
import discord_white from '../images/discord-white.png';
import Typewriter from 'typewriter-effect/';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

const Home = ({darkMode}) => {
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
            My name is Jessica, a <strong>Research Assistant</strong> at Duke-NUS.
            I recently graduated in 2024 from <strong>NUS Pharmaceutical Science</strong>.
            Currently, I love creating <a href="#projects"><strong>stuffs</strong></a> that help people.
            In my free time, I enjoy exploring new things and I am really passionate about music.
            Hit me up for covers!
          </div>
          <Stack direction="row" spacing={2} justifyContent={isMobileScreen ? "center" : "flex-start"}>
            <a href="https://github.com/maryjess">
              <img className="icon-small" src={darkMode ? github_white : github} alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/jessicalistijo/">
              <img className="icon-small" src={darkMode ? linkedin_white : linkedin} alt="linkedin"></img>
            </a>
            <a href="https://www.instagram.com/jessicalistijo">
              <img className="icon-small" src={darkMode ? instagram_white : instagram} alt="instagram"></img>
            </a>
            <a href="https://www.youtube.com/@jessicalistijo">
              <img className="icon-small" src={darkMode ? youtube_white : youtube} alt="youtube"></img>
            </a>
            <a href="https://tiktok.com/@jessicalistijo">
              <img className="icon-small" src={darkMode ? tiktok_white : tiktok} alt="tiktok"></img>
            </a>
            <a href="https://medium.com/@jessicalistijo">
              <img className="icon-small" src={darkMode ? medium_white : medium} alt="medium"></img>
            </a>
            <a href="https://discordapp.com/users/hellojxss">
              <img className="icon-small" src={darkMode ? discord_white : discord} alt="discord"></img>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </body>
  );
}

export default Home;