import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../Styles/Experience.css"

function Experience(){
    return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2018 - 2022"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Medford High School, Medford, MA
                </h3>
                <p>High School Diploma</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2022 - 2023"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Salem State University, Salem, MA
                </h3>
                <p>First Year of Bachelor's Degree in Computer Science</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2023 - Present"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Boston University, Boston, MA
                </h3>
                <p>Bachelor's Degree in Computer Science and Economics</p>

            </VerticalTimelineElement>

            <VerticalTimelineElement 
            className="vertical-timeline-element--education"
            date="2023 - Present"
            iconStyle={{background: "#023020", color: "#fff"}}
            icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Company Name, City, State
                </h3>
                <p>Description of tasks</p>

            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    );
}

export default Experience;