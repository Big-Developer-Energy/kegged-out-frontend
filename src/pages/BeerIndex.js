import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../pages/BeerIndex.css";
const BeerIndex = ({ beers }) => {
  return (
    <>
      <main>
        <div className="beers-title">Beers</div>
        <div className="beer-container">
        <h1>{beers.name}</h1>
        {beers?.map((beer, index) => {
          return (
            <>
              <div>
                <Card className="beer-card" key={index} style={{ height:"100%",width:"16rem"}} >
                  <img alt={`beer review ${beer.name}`} src={beer.image} />
                  <CardBody>
                    <CardTitle>{beer.name}</CardTitle>
                    <CardSubtitle>{beer.rating}</CardSubtitle>
                    <CardText>{beer.description}</CardText>
                  <div className="beer-card-NavLink">
                    <NavLink to={`/BeerShow/${beer.id}`}>
                      See more details
                    </NavLink>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </>
          );
        })}
        </div>
      </main>
    </>
  );
};

export default BeerIndex;
