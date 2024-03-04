import React from 'react';
import nus from '../images/nus.png';
import penabur from '../images/penabur.png';
import kanaan from '../images/kanaan.png';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Stack, Card, CardContent } from '@mui/material';

const Education = () => {
  const isMobileScreen = useCheckMobileScreen();
  return (
    <Stack>
      <div className={isMobileScreen? "card-header mobile edu" : "card-header edu"} id="education">
        <h1 className="card-title">Education</h1>
      </div>
      {isMobileScreen ?
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={4}>
          <div className="padding-right">
            <div className="padding-bottom">
              <Card
                sx={{
                  width: "320px",
                  height: "auto",
                  borderRadius: "10px",
                  backgroundColor: "#dcf5f5",
                  display: "flex"
                }}
              >
                <div className="card-contents">
                  <CardContent
                    sx={{padding: "30px", paddingBottom: "0px"}}
                  >
                    <Stack justifyContent="space-evenly">
                      <h3 className="vertical-timeline-element--title">National University of Singapore</h3>
                      <h4 className="vertical-timeline-element--subtitle">Singapore</h4>
                      <h4 className="vertical-timeline-element-date">August 2020 - May 2024</h4>
                      <p className="para mobile">
                        <ul>
                          <li>B.Sc (Honours) in Pharmaceutical Science,<br></br>
                          Minor in Computer Science</li>
                          <li>Recipient of ASEAN Undergraduate Scholarship</li>
                          <li>Co-Curricular Activities:<br></br>
                          The NUSChoir<br></br>(Soprano 2 Section Leader),<br></br>
                          NUS Angklung Ensemble<br></br>(Lead Conductor),<br></br>
                          NUANSA Cultural Productions<br></br>(Keyboardist)</li>
                        </ul>
                      </p>
                    </Stack>
                  </CardContent>
                </div>
              </Card>
            </div>
            <div className="padding-bottom">
              <Card
                sx={{
                  width: "320px",
                  height: "auto",
                  borderRadius: "10px",
                  backgroundColor: "#dcf5f5",
                  display: "flex"
                }}
              >
                <div className="card-contents">
                  <CardContent
                    sx={{padding: "30px", paddingBottom: "0px"}}
                  >
                    <Stack justifyContent="space-evenly">
                      <h3 className="vertical-timeline-element--title">SMAK Penabur Gading Serpong</h3>
                      <h4 className="vertical-timeline-element--subtitle">Tangerang, Indonesia</h4>
                      <h4 className="vertical-timeline-element-date">July 2017 - June 2020</h4>
                      <p className="para mobile">
                        <ul>
                          <li>Won Bronze Medal in International Chemistry Olympiad (IChO) 2019 in Paris, France</li>
                          <li>Won Gold Medal in Chemistry in National Science Olympiad (OSN) 2018 in Padang, West Sumatera</li>
                          <li>
                            Co-curricular Activities: Scout, Kolintang
                          </li>
                        </ul>
                      </p>
                    </Stack>
                  </CardContent>
                </div>
              </Card>
            </div>
            <Card
              sx={{
                width: "320px",
                height: "auto",
                borderRadius: "10px",
                backgroundColor: "#dcf5f5",
                display: "flex"
              }}
            >
              <div className="card-contents">
                <CardContent
                  sx={{padding: "30px", paddingBottom: "0px"}}
                >
                  <Stack justifyContent="space-evenly">
                  <h3 className="vertical-timeline-element--title">SMP Kristen Kanaan</h3>
                  <h4 className="vertical-timeline-element--subtitle">Banjarmasin, Indonesia</h4>
                  <h4 className="vertical-timeline-element-date">July 2014 - June 2017</h4>
                  <p className="para mobile">Co-curricular Activities:<br></br>
                    Guitar, Math Club, Physics Club</p>
                  </Stack>
                </CardContent>
              </div>
            </Card>
          </div>
        </Stack> :
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2020 - May 2024"
            contentStyle={{ borderRadius: '10px', background: '#dcf5f5', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #dcf5f5' }}
            iconStyle={{ background: '#dcf5f5', color: '#fff', alignItems:'center', display:'flex'}}
            icon={<img alt="NUS" src={nus} className="timeline-icon center"></img>}
            >
            <h3 className="vertical-timeline-element--title">National University of Singapore</h3>
            <h4 className="vertical-timeline-element--subtitle">Singapore</h4>
            <p className="para">
              <ul>
                <li>B.Sc (Honours) in Pharmaceutical Science,<br></br>
                Minor in Computer Science</li>
                <li>Recipient of ASEAN Undergraduate Scholarship</li>
                <li>Co-Curricular Activities:<br></br>
                The NUSChoir (Soprano 2 Section Leader),<br></br>
                NUS Angklung Ensemble (Lead Conductor),<br></br>
                NUANSA Cultural Productions (Keyboardist)</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2017 - June 2020"
            contentStyle={{ borderRadius: '10px', background: '#dcf5f5', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #dcf5f5' }}
            iconStyle={{ background: '#dcf5f5', color: '#fff', alignItems:'center', display:'flex'}}
            icon={<img alt="Penabur" src={penabur} className="timeline-icon center"></img>}
            >
            <h3 className="vertical-timeline-element--title">SMAK Penabur Gading Serpong</h3>
            <h4 className="vertical-timeline-element--subtitle">Tangerang, Indonesia</h4>
            <p className="para">
              <ul>
                <li>Won Bronze Medal in International Chemistry Olympiad (IChO) 2019 in Paris, France</li>
                <li>Won Gold Medal in Chemistry in National Science Olympiad (OSN) 2018 in Padang, West Sumatera</li>
                <li>
                  Co-curricular Activities: Scout, Kolintang
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2014 - June 2017"
            contentStyle={{ borderRadius: '10px', background: '#dcf5f5', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #dcf5f5' }}
            iconStyle={{ background: '#dcf5f5', color: '#fff', alignItems:'center', display:'flex'}}
            icon={<img alt="Kanaan" src={kanaan} className="timeline-icon center"></img>}
            >
            <h3 className="vertical-timeline-element--title">SMP Kristen Kanaan</h3>
            <h4 className="vertical-timeline-element--subtitle">Banjarmasin, Indonesia</h4>
            <p className="para">Co-curricular Activities:<br></br>
              Guitar, Math Club, Physics Club</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      }
    </Stack>
  );
}

export default Education;