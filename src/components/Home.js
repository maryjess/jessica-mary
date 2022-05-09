// import {useState} from 'react';
// import Icon from './Icon';
import {Stack} from '@mui/material';
import profilePic from '../images/profile-picture.jpg';

const Home = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const toggleLoading = () => {setIsLoading(false)};

  return (
      <Stack spacing={0.5}>
          <h1 className="calligraphy">Hello There!</h1>
          {/* TODO add icon star or wave */}
          <Stack spacing={2} direction="row" alignItems="stretch">
            <div className="para">
              My name is Jessica, a <strong>Pharmaceutical Science</strong> undergraduate with a 
              minor in <strong>Computer Science</strong> in National University of Singapore. 
              I love creating new things, including music covers. 
            </div>
            <div className="zoom">
              <img className="profile-cropped" src={profilePic} alt="Jessica-Mary"
              width="300"></img>
            </div>
          </Stack>
      </Stack>
    

  );
}

export default Home;