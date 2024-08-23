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
                        <br/>Bachelor of Science (Honours) in Pharmaceutical Science &#8212; Minor in Computer Science
                        <br/><br/>Recipient of ASEAN Undergraduate Scholarship
                        <br/><br/>Co-Curricular Activities:
                        <ul className="subtitle">
                          <li className="cca"><a href={"https://www.instagram.com/nuansacp/"}>
                            <strong>NUANSA Cultural Productions:</strong></a>
                            <br/>Keyboardist</li>
                          <li className="cca"><a href={"https://nus.edu.sg/osa/pgpr/our-people/cluster-leaders"}>
                            <strong>Prince George's Park Residences:</strong></a>
                            <br/>Cluster Leader</li>
                          <li className="cca"><a href={"https://nusangklung.netlify.app/"}>
                            <strong>NUS Angklung Ensemble</strong></a>
                            <br/>Lead Conductor</li>
                          <li className="cca"><a href={"https://www.youtube.com/user/TheNUSChoir"}>
                            <strong>The NUSChoir</strong></a>
                            <br/>Soprano 2 Section Leader</li>
                        </ul>
                        Community Engagement:<br/>
                        <ul className="reset">
                          Volunteered in <a href={"https://www.facebook.com/ifn.singapore/"}>
                          <strong> Indonesian Family Network </strong></a>
                          as Basic English Teacher
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
                          <li>Bronze Medallist of
                            <a href={"https://icho2019.paris/en/"}> International Chemistry Olympiad 2019
                            </a> in Paris, France
                          </li>
                          <li>Gold Medallist in Chemistry of National Science Olympiad 2018 in Padang, West Sumatra</li>
                          <li>
                            <strong>Co-Curricular Activities:</strong> Scout,
                            <a href={"https://youtu.be/Bq9-USYvCQs?si=kNhhXHZ1LzimasD3"}> Kulintang</a>,
                            <a href={"https://bcomp.id/"}> Brilliant Competition</a>
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
                    <br/><p className="para mobile"><strong>Co-Curricular Activities:</strong><br></br>
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
              Bachelor of Science (Honours) in Pharmaceutical Science &#8212;
              Minor in Computer Science &#8212; Recipient of ASEAN Undergraduate Scholarship
              <br/><br/>Co-Curricular Activities:<br/>
              <ul className="subtitle">
                <li className="cca"><a href={"https://www.instagram.com/nuansacp/"}>
                  <strong>NUANSA Cultural Productions </strong></a>
                  as Keyboardist
                </li>
                <li className="cca"><a href={"https://nus.edu.sg/osa/pgpr/our-people/cluster-leaders"}>
                  <strong>Prince George's Park Residences </strong></a>
                  as Cluster Leader
                </li>
                <li className="cca"><a href={"https://nusangklung.netlify.app/"}>
                  <strong>NUS Angklung Ensemble </strong></a>
                  as Lead Conductor
                </li>
                <li className="cca"><a href={"https://www.youtube.com/user/TheNUSChoir"}>
                  <strong>The NUSChoir </strong></a>
                  as Soprano 2 Section Leader
                </li>
              </ul>
              Community Engagement:<br/>
              <ul className="reset">
                Volunteered in
                <a href={"https://www.facebook.com/ifn.singapore/"}>
                <strong> Indonesian Family Network </strong></a>
                as Basic English Teacher
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2017 - June 2020"
            contentStyle={{borderRadius: '10px', background: '#dcf5f5', color: '#000'}}
            contentArrowStyle={{borderRight: '7px solid #dcf5f5'}}
            iconStyle={{background: '#dcf5f5', color: '#fff', alignItems: 'center', display: 'flex'}}
            icon={<img alt="Penabur" src={penabur} className="timeline-icon center"></img>}
          >
            <h3 className="vertical-timeline-element--title">SMAK Penabur Gading Serpong</h3>
            <h4 className="vertical-timeline-element--subtitle">Tangerang, Indonesia</h4>
            <p className="para">
              <ul>
                <li>Bronze Medallist of
                  <a href={"https://icho2019.paris/en/"}> International Chemistry Olympiad 2019
                  </a> in Paris, France
                </li>
                <li>Gold Medallist in Chemistry of National Science Olympiad 2018 in Padang, West Sumatra</li>
                <li>
                  <strong>Co-Curricular Activities:</strong><br/> Scout,
                  <a href={"https://youtu.be/Bq9-USYvCQs?si=kNhhXHZ1LzimasD3"}> Kulintang</a>,
                  <a href={"https://bcomp.id/"}> Brilliant Competition</a>
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
            <p className="para"><strong>Co-Curricular Activities:</strong><br></br>
              Guitar, Math Club, Physics Club</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      }
    </Stack>
  );
}

export default Education;