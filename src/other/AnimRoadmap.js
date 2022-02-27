import React from "react";
import "./Anim.css";
import { Link } from "react-router-dom";
import { ReactComponent as WorkIcon } from "./Work.svg";
import { ReactComponent as SchoolIcon } from "./School.svg";
import roadmapElements from './roadmapelements'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let workIconStyles = { background: "#FF4500" };
  let schoolIconStyles = { background: "#FF0000" };

  return (
    <div>
      <h1 className="title">Road Map</h1>
      <VerticalTimeline>
        {roadmapElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date" 
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
             // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}       
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              {/* <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5> */}
              <p id="description">{element.description}</p>
              
                 {element.id ==1 && <Link style={{ textDecoration: 'none' }} to='/pre' > <a className='btn btn-primary' href="#app" role="button" data-tilt-perspective="300" data-tilt-speed="700" data-tilt-max="24"><span>Pre-sale</span></a></Link>}

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <hr style={ {"background-color":"white"}}/>
    </div>
  );
}

export default App;
