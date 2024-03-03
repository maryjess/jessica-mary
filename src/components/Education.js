import React from 'react';
import nus from '../images/nus.png';
import penabur from '../images/penabur.png';
import kanaan from '../images/kanaan.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Stack } from '@mui/material';

const Education = () => {
  return (
    <Stack>
      <div className="card-header__edu edu">
        <h1 className="card-title">Education</h1>
      </div>
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
              <li>B.Sc (Honours) in Pharmaceutical Science, Minor in Computer Science</li>
              <li>Recipient of ASEAN Undergraduate Scholarship</li>
              <li>Co-Curricular Activities:<br></br>
              The NUSChoir, NUS Angklung Ensemble, NUANSA Cultural Productions</li>
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
    </Stack>
  );
}

export default Education;