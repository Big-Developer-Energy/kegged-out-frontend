import React from "react";
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";
import "../pages/Aboutus.css";
const AboutUs = () => {
  return (
    <>
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="card-container">
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody className="card-body">
            <CardTitle tag="h5">Alex Nguyen</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Product Manager
            </CardSubtitle>
            <CardText className="about-me-text">
              About Me: Hey! I’m a San Diego native with a penchant for
              wanderlust and adventure. During my time in the US Navy, I
              traveled the world in a submarine, stopping in Japan, Australia
              and other far away places. Now living topside permanently, I work
              as a full stack developer making cool apps and websites like
              Kegged Out! I enjoy a nice, refreshing amber ale, Karl Strauss’
              Red Trolley being a good one. It reminds me of Rome, the way the
              sunlight hits the buildings in the afternoon.
            </CardText>
            <br/>
            <CardText>
              Skills: HTML, React, Ruby, Ruby on Rails, PostgreSQL
            </CardText>
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
            width: "18rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Chandler Gipson</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Design Lead
            </CardSubtitle>
            <CardText className="about-me-text">
              About Me: Hey there! I'm a Full-stack Web Developer driven by a
              lifelong passion for technology and hands-on work. As an Army
              combat veteran, my military background has instilled in me skills
              like adaptable leadership, which I now bring to problem-solving in
              the tech world. I thrive in collaborative coding sessions and
              enjoy bringing projects to life.
            </CardText>
            <br/>
            <CardText>
              Skills: HTML, React, Ruby, Ruby on Rails, PostgreSQL
            </CardText>
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
            width: "18rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Danny De La Rosa</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Tech Lead
            </CardSubtitle>
            <CardText className="about-me-text">
              About Me I'm Danny, a USMC veteran and realtor turned Full-Stack
              Software Developer, where my journey intertwines in the world of
              coding. Skilled in JavaScript, Ruby, React, and Ruby on Rails, I
              am not just coding; I am crafting pathways to diverse
              opportunities in tech, including a personal aspiration towards
              game development. Each project is a step towards a broader
              understanding of software development, with an eye on creating my
              own indie game or contributing to the next big title in the gaming
              industry. My path began in the United States Marine Corps as a
              METOC Analyst Forecaster where gained a sharp analytical mindset
              and attention to detail. Transitioning into real estate, I further
              developed my client service skills, understanding user needs — a
              critical aspect of both functional software and engaging game
              design. My fascination with technology and gaming sparked the
              shift to software development. At LEARN Academy, I find myself
              fascinated by the endless possibilities this field offers. From
              building web applications to exploring the potential of
              interactive digital environments, my goal is to blend technical
              experience with creative analyzing.
            </CardText>
            <br/>
            <CardText>
              Skills: HTML, React, Ruby, Ruby on Rails, PostgreSQL
            </CardText>
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
            width: "18rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Dalton McAuliffe</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Project Manajor
            </CardSubtitle>
            <CardText className="about-me-text">
              About Me: I'm an Army veteran from San Diego CA. I pursued
              Full-Stack web Developer, where my journey intertwines in the
              world of coding.
            </CardText>
            <br/>
            <CardText>
              Skills: HTML, React, Ruby, Ruby on Rails, PostgreSQL
            </CardText>
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
