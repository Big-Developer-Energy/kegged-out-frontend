import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  
} from "reactstrap";
import "../pages/Aboutus.css";
const AboutUs = () => {
  return (
    <>
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="card">
        <Card
          style={{
            width: "20rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody className="card-body">
            <CardTitle tag="h5">Alex Nguyen</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Product Manager
            </CardSubtitle>
            <CardText>About Me:</CardText>
            <CardText>Skills:</CardText>
            <>
              <a
                href="https://www.linkedin.com/in/alexander-d-nguyen/"
                target="blank"
              >
                LinkedIn
              </a>
            </>
            <br />
            <>
              <a href="https://github.com/adnguyen07" target="blank">
                GitHub
              </a>
            </>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "20rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Chandler Gipson</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Design Lead
            </CardSubtitle>
            <CardText>About Me:</CardText>
            <CardText>Skills:</CardText>
            <>
              <a
                href="https://www.linkedin.com/in/chandlergipson/"
                target="blank"
              >
                LinkedIn
              </a>
            </>

            <br />
            <>
              <a href="https://github.com/ChandlerGipson" target="blank">
                GitHub
              </a>
            </>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "20rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Danny De La Rosa</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Tech Lead
            </CardSubtitle>
            <CardText>About Me:</CardText>
            <CardText>Skills:</CardText>
            <>
              <a href="https://www.linkedin.com/in/dannydlr/" target="blank">
                LinkedIn
              </a>
            </>
            <br />
            <>
              <a href="https://github.com/Danny-DeLaRosa" target="blank">
                GitHub
              </a>
            </>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "20rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Dalton McAuliffe</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Project Manajor
            </CardSubtitle>
            <CardText>About Me:</CardText>
            <CardText>Skills:</CardText>
            <>
              <a
                href="https://www.linkedin.com/in/dalton-mcauliffe/"
                target="blank"
              >
                LinkedIn
              </a>
            </>
            <br />
            <>
              <a href="https://github.com/DaltonMcauliffe" target="blank">
                GitHub
              </a>
            </>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default AboutUs;
