import React from "react";
import { useParams } from "react-router-dom";

const BeerShow = ({ beers }) => {
  const { id } = useParams();
  let currentBeer = beers.find((beer) => beer.id === +id);
  console.log(currentBeer);

  return (
    <>
      <div>BeerShow</div>
      <main>
        {currentBeer && (
          <>
          <img alt={`profile of beer named ${currentBeer.name}`} src={currentBeer.image} />
          
          </>
        )}
      </main>
    </>
  );
};

export default BeerShow;
