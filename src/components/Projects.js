import { Stack, Card, CardContent, CardMedia, CardActions, CardActionArea, Button } from '@mui/material';
import React from 'react';
import mew from '../images/mew.png';
import qr_bookmark from '../images/qr-bookmark.jpg';
import internconnect from '../images/internconnect.png';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

const Projects = () => {
  const isMobileScreen = useCheckMobileScreen();
  return (
    <Stack spacing={isMobileScreen ? 0 : 2} justifyContent="center" alignItems="center">
      <div className={isMobileScreen? "card-header mobile works" : "card-header works"} id="projects">
        <h1 className="card-title">Projects</h1>
      </div>  
      <Stack
        flexDirection={{xs:"column", xl:"row"}}
        justifyContent="center"
        alignItems="center"
        spacing={{xs: 2, xl: 0}}
      >
        <div className="padding-right">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              height: "450px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://ay2223s1-cs2103-f14-2.github.io/tp/">
                <CardMedia
                  className="center"
                  sx={{
                    height: isMobileScreen ? "170px" : "200px",
                    width: "450px"
                  }}
                  image={internconnect}
                  title="InternConnect"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", paddingBottom: "0px"}}
              >
                <Stack justifyContent="space-evenly">
                  <a className="card less-spacing" href="https://ay2223s1-cs2103-f14-2.github.io/tp/">
                    <h3 className="card less-spacing">InternConnect</h3>
                  </a>
                  <p className="para less-spacing">a one-stop platform to help internship
                  campus recruiters who prefer CLI over GUI work with their applicants’ data.</p>
                  <CardActions>
                    <Stack direction="row" spacing={2}>
                      <Button 
                        id="card-button"
                        href="https://ay2223s1-cs2103-f14-2.github.io/tp/"
                        sx={{fontFamily: "Work Sans", textTransform: "none"}} 
                        variant="contained" 
                        color="success" 
                        size="small"
                      >
                        Learn More
                      </Button>
                      <Button 
                        id="card-button"
                        href="https://github.com/AY2223S1-CS2103-F14-2/tp"
                        sx={{fontFamily: "Work Sans", textTransform: "none"}} 
                        color="success" 
                        variant="outlined"
                        size="small"
                      >
                        Source Code
                      </Button>
                    </Stack>
                  </CardActions>
                </Stack>
              </CardContent>
            </div>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              width: isMobileScreen ? "320px" :  "450px",
              borderRadius: "10px",
              height: "450px",
              backgroundColor: "#efffe0",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://maryjess.github.io/ip/">
                <CardMedia
                  className="center"
                  sx={{height: "200px", width: "450px", maxHeight: "200px", maxWidth: "450px"}}
                  image={mew}
                  title="Mew"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", display: "flex"}}
              >
                <Stack justifyContent="space-evenly">
                  <div>
                    <a className="card" href="https://maryjess.github.io/ip/">
                      <h3 className="card">Mew Chatbot</h3>
                    </a>
                    <p className="para">a simple task manager chatbot application written in Java.</p>
                  </div>
                  <CardActions>
                    <Stack direction="row" spacing={2} sx={{alignSelf: "flex-end"}}>
                      <Button 
                        id="card-button"
                        href="https://maryjess.github.io/ip/"
                        sx={{fontFamily: "Work Sans", textTransform: "none"}} 
                        variant="contained" 
                        color="success" 
                        size="small"
                      >
                        Learn More
                      </Button>
                      <Button 
                        id="card-button"
                        href="https://github.com/maryjess/ip"
                        sx={{fontFamily: "Work Sans", textTransform: "none"}} 
                        color="success" 
                        variant="outlined"
                        size="small"
                      >
                        Source Code
                      </Button>
                    </Stack>
                  </CardActions>
                </Stack>
              </CardContent>
            </div>
          </Card>
        </div>
        <div className="padding-left">
          <Card
            sx={{
              width: isMobileScreen ? "320px" : "450px",
              borderRadius: "10px",
              backgroundColor: "#efffe0",
              height: "450px",
              display: "flex"
            }}
          >
            <div className="card-contents">
              <CardActionArea href="https://github.com/yehudanathan/qr-bookmark">
                <CardMedia
                  className="center"
                  sx={{
                    height: "200px", 
                    width: "450px"
                  }}
                  image={qr_bookmark}
                  title="QR-Bookmark"
                />
              </CardActionArea>
              <CardContent
                sx={{padding: "30px", display: "flex"}}
              >
                <Stack justifyContent="space-evenly">
                  <div>
                    <a className="card" href="https://github.com/yehudanathan/qr-bookmark">
                      <h3 className="card">QR-Bookmark</h3>
                    </a>
                    <p className="para">a bookmark manager that can scan QR code for URLs.<br></br>
                    <i>(Under construction)</i></p>
                  </div>
                  <CardActions>
                    {/* <Stack direction="row" spacing={2} sx={{alignSelf: "flex-end"}}> */}
                      {/* <Button 
                        href="https://maryjess.github.io/ip/"
                        sx={{fontFamily: "Montserrat", textTransform: "none"}} 
                        variant="contained" 
                        color="success" 
                        size="small"
                      >
                        Learn More
                      </Button> */}
                      <Button
                        href="https://github.com/yehudanathan/qr-bookmark"
                        sx={{
                          fontFamily: "Work Sans",
                          textTransform: "none"
                        }} 
                        color="success" 
                        variant="outlined"
                        size="small"
                      >
                        Source Code
                      </Button>
                    {/* </Stack> */}
                  </CardActions>
                </Stack>
              </CardContent>
            </div>
          </Card>
        </div>
      </Stack>
    </Stack>
  );
}

export default Projects;