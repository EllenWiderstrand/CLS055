import './Process.css';
import { ReactComponent as Icon } from "./images/footsteps.svg"
import "react-vertical-timeline-component/style.min.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"
import research from './images/socialmedia.png';
import wireframe1 from './images/wireframe1.png';
import storyboard from './images/storyboard.png';
import colourScheme from './images/colourScheme.png';
import bloglovin from './images/bloglovin.png';
import wireframe2 from './images/wireframe2.png';
import wireflow from './images/wireflow.png';
import responsive from './images/responsive.png';
import eval1 from './images/eval1.png';
import eval2 from './images/eval2.png';
import prototyping from './images/prototyping.png';

  let timelineElements = [
    {
      id: 1,
      title: "Research",
      description: [
        "6 semi-structured interviews",
        "Research and benchmarking of competitors and social media"
      ],
      images: [
        {
          image: research,
          id: 1,
        },
        {
          image: bloglovin,
          id: 2,
        },
      ],
    },
    {
      id: 2,
      title: "Ideation",
      description: [
        "3 directions (2 websites, 1 app)",
        "Wireframes",
        "Journey map",
        "Colour schemes",
      ],
      images: [
        {
          image: wireframe1,
          id: 1,
        },
        {
          image: wireframe2,
          id: 2,
        },
      ]
    },
    {
      id: 3,
      title: "Defining",
      description: [
        "3 directions → 2 directions",
        "Focus on website because it is more accessible (can be viewed on both computers and smartphones)",
        "Storyboard",
        "Wireframes",
        "Wireflow",
        "Responsive design",
      ],
      images: [
        {
          image: storyboard,
          id: 1,
        },
        {
          image: wireflow,
          id: 2,
        },
        {
          image: responsive,
          id: 3,
        },
      ]
    },
    {
      id: 4,
      title: "Evaluation",
      description: [
        "Questionnaire for colour scheme",
        "2 interviews with wireframes",
      ],
      images: [
        {
          image: colourScheme,
          id: 1,
        },
        {
          image: eval1,
          id: 2,
        },
        {
          image: eval2,
          id: 3,
        },
      ]
    },
    {
      id: 5,
      title: "Prototyping",
      description: [
        "Wireframing",
        "Finalising the colour scheme",
      ],
      images: [
        {
          image: prototyping,
          id: 1,
        },
      ]
    },
  ]

function Process() {
  return (
    <div className="process">
      <h2 className="heading">Design Process</h2>
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
              <ul>
                {element.description.map(item => {
                  return (
                    <li key={item}>{item}</li>
                  )
                })}
              </ul>
              {element.images.map(item => {
                  return (
                    <img alt={element.title} className="processImg" key={item.id} src={item.image} />
                  )
                })}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Process;
