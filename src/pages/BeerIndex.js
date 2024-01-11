import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const BeerIndex = ({ beers }) => {
  return (
    <>
      <main>
        <div>BeerIndex</div>
        <h1>{beers.name}</h1>
        {beers?.map((beer, index) => {
          return (
            <>
              <Card key={index} style={{ width: "14rem" }}>
                <img alt={`beer review ${beer.name}`} src={beer.image} />
                <CardBody>
                  <CardTitle>{beer.name}</CardTitle>
                  <CardSubtitle>{beer.rating}</CardSubtitle>
                  <CardSubtitle>{beer.description}</CardSubtitle>
                  <NavLink to={`/BeerShow/${beer.id}`}>
                    See more details
                  </NavLink>
                </CardBody>
              </Card>
            </>
          );
        })}
      </main>
    </>
  );
};

export default BeerIndex;
