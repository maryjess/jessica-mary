import { Stack, Card, CardContent } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import { isMobile } from 'react-device-detect';
import React from 'react';
import nus from '../images/nus.png';
import axs from '../images/axs.png';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const isMobileScreen = useCheckMobileScreen();
  console.log(isMobileScreen);
  return (
    <Stack>
      <div className={isMobileScreen? "card-header mobile exp" : "card-header exp"} id="experience">
        <h1 className="card-title">Experiences</h1>
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
                  backgroundColor: "#f5ddc1",
                  display: "flex"
                }}
              >
                <div className="card-contents">
                  <CardContent
                    sx={{padding: "30px", paddingBottom: "0px"}}
                  >
                    <Stack justifyContent="space-evenly">
                      <h3 className="vertical-timeline-element--title">Student Researcher</h3>
                      <h4 className="vertical-timeline-element--subtitle">National University of Singapore</h4>
                      <h4 className="vertical-timeline-element-date">August 2023 - April 2024</h4>
                      <p className="para">
                        <br/><strong>Final Year Project in Bioinformatics:<br/></strong>
                        Genomic analysis of bacteriophages located in the genomes of carbapenem-resistant
                        <i> Pseudomonas aeruginosa.<br/><br/></i>
                        <p className="para small">
                          <strong>Supervisor:</strong> <a href={"https://sph.nus.edu.sg/faculty-directory/ong-twee-hee-rick/"}>
                          Asst. Prof. Ong Twee Hee, Rick</a> (Saw Swee Hock School of Public Health)</p>
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
                  backgroundColor: "#f5ddc1",
                  display: "flex"
                }}
              >
                <div className="card-contents">
                  <CardContent
                    sx={{padding: "30px", paddingBottom: "0px"}}
                  >
                    <Stack justifyContent="space-evenly">
                      <h3 className="vertical-timeline-element--title">Android Developer</h3>
                      <h4 className="vertical-timeline-element--subtitle">AXS</h4>
                      <h4 className="vertical-timeline-element-date">December 2022 - February 2023</h4>
                      <p className="para mobile">
                        <ul>
                          <li>Leveraged Java and MySQL to design and implement new features within an Android mobile
                            application to assist the Operations Team, contributed to its growth and user experience
                            enhancement.</li>
                          <li>Revitalised more than 10 deprecated Android API classes,
                            ensuring seamless code functionality.</li>
                          <li>Enhanced code quality and stability in Java and PHP
                            through systematic refactoring and maintenance.</li>
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
                backgroundColor: "#f5ddc1",
                display: "flex"
              }}
            >
              <div className="card-contents">
                <CardContent
                  sx={{padding: "30px", paddingBottom: "0px"}}
                >
                  <Stack justifyContent="space-evenly">
                  <h3 className="vertical-timeline-element--title">CS1010S Teaching Assistant</h3>
                  <h4 className="vertical-timeline-element--subtitle">National University of Singapore</h4>
                  <h4 className="vertical-timeline-element-date">August 2021 - December 2022</h4>
                  <p className="para mobile">
                    <ul>
                      <li>Evaluated daily Python code submissions and conducted weekly tutorials for a cohort of 13 students.</li>
                      <li>Achieved a mean teaching feedback score of 4.7 out of 5.0.</li>
                      <li>Received the Honour List for Student Tutors during AY2021/2022.</li>
                    </ul>
                  </p>
                  </Stack>
                </CardContent>
              </div>
            </Card>
          </div>
        </Stack> :
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2023 - April 2024"
            contentStyle={{ borderRadius: '10px', background: '#f5ddc1', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #f5ddc1' }}
            iconStyle={{ background: '#f5ddc1', color: '#fff', alignItems:'center', display:'flex'}}
            icon={<img alt="NUS" src={nus} className="timeline-icon center"></img>}
            >
            <h3 className="vertical-timeline-element--title">Student Researcher</h3>
            <h4 className="vertical-timeline-element--subtitle">National University of Singapore</h4>
            <p className="para">
              <strong>Final Year Project in Bioinformatics:<br/></strong>
              Genomic analysis of bacteriophages located in the genomes of carbapenem-resistant
              <i> Pseudomonas aeruginosa<br/></i>
              <p className="para small">
                <strong>Supervisor:</strong><br/>
                <a href={"https://sph.nus.edu.sg/faculty-directory/ong-twee-hee-rick/"}>
                Asst. Prof. Ong Twee Hee, Rick</a> (NUS Saw Swee Hock School of Public Health)</p>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2022 - February 2023"
            contentStyle={{borderRadius: '10px', background: '#f5ddc1', color: '#000'}}
            contentArrowStyle={{borderRight: '7px solid #f5ddc1'}}
            iconStyle={{background: '#f5ddc1', color: '#fff', alignItems: 'center', display: 'flex'}}
            icon={<img alt="AXS" src={axs} className="timeline-icon center"></img>}
          >
            <h3 className="vertical-timeline-element--title">Android Developer</h3>
            <h4 className="vertical-timeline-element--subtitle">AXS</h4>
            <p className="para">
              <ul>
                <li>Leveraged Java and MySQL to design and implement new features within an Android mobile application
                  to assist the Operations Team, contributed to its growth and user experience enhancement.</li>
                <li>Revitalised more than 10 deprecated Android API classes, ensuring seamless code functionality.</li>
                <li>Enhanced code quality and stability in Java and PHP
                  through systematic refactoring and maintenance.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2021 - December 2022"
            contentStyle={{ borderRadius: '10px', background: '#f5ddc1', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #f5ddc1' }}
            iconStyle={{ background: '#f5ddc1', color: '#fff', alignItems:'center', display:'flex'}}
            icon={<img alt="NUS" src={nus} className="timeline-icon center"></img>}
            >
            <h3 className="vertical-timeline-element--title">CS1010S Teaching Assistant</h3>
            <h4 className="vertical-timeline-element--subtitle">National University of Singapore</h4>
            <p className="para">
              <ul>
                <li>Evaluated daily Python code submissions and conducted weekly tutorials for a cohort of 13 students.</li>
                <li>Achieved a mean teaching feedback score of 4.7 out of 5.0.</li>
                <li>Received the Honour List for Student Tutors during AY2021/2022.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      }
    </Stack>
  );
}

export default Experience;