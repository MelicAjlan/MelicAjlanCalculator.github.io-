import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="purple">Hello world!</span> 
          <br />I am <span className="purple">Ajlan Melic </span>
            from <span className="purple"> SIsak, Croatia.</span>
            <br />I am a junior <span className="purple">Front-end Developer</span> and <span className="purple">ReactJS</span> Dev. I am also a <span className="purple">UI/UX</span> Dev.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learn more about Programming 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hangout with boys
            </li>
            <li className="about-activity">
              <ImPointRight /> Work on my car
            </li>

            <li className="about-activity">
              <ImPointRight /> Spend time with my family
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is hard! You just have to enjoy every single bit of it!"{" "}
          </p>
          <footer className="blockquote-footer">Ajlan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
