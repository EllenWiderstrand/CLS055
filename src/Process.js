import './Process.css';
import { ReactComponent as Icon } from "./footsteps.svg"
import "react-vertical-timeline-component/style.min.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"

  let timelineElements = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Dragontail, Ascana",
      description:
        "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
      buttonText: "View Frontend Projects",
      icon: "1",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Skystead, Craonia",
      description:
        "Working hand-in-hand with front-end developers by providing the outward facing web application elements server-side logic. Creating the logic to make the web app function properly, and accomplishing this through the use of server-side scripting languages.",
      buttonText: "View Backend Projects",
      icon: "2",
    },
    {
      id: 3,
      title: "Quality Assurance Engineer",
      location: "South Warren, Geshington",
      description:
        "Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
      buttonText: "Company Website",
      icon: "work",
    },
    {
      id: 4,
      title: "Oak Ridge College",
      location: "South Warren, Geshington",
      description:
        "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      buttonText: "Course Certificate",
      icon: "school",
    },
    {
      id: 5,
      title: "Hawking College",
      location: "Skystead, Craonia",
      description:
        "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      buttonText: "College Projects",
      icon: "school",
    },
    {
      id: 6,
      title: "Marble Hills Grammar School",
      location: "Dragontail, Ascana",
      description:
        "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
      icon: "school",
    },
  ]

function Process() {
  return (
    <div>
      <VerticalTimeline>
        {timelineElements.map(element => {
          return (
            <VerticalTimelineElement
              key={element.id}
              iconStyle={{backgroundColor: "#D9C6BC"}}
              icon={<Icon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Process;
