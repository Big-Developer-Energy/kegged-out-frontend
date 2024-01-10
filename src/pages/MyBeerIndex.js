import React from "react"
import BeerCard from "../components/BeerCard"

const MyBeerIndex = ({ beers, currentUser }) => {

    const myBeers = beers?.filter((beer) => currentUser.id === beer.user_id)

    return (
        <>
        <div>
        <h2>My Beers</h2>
            <div>
                {myBeers?.map((beer, index) => {
                    return <BeerCard beer={beer} index={index}/>
                })}
            </div>
        </div>
        </>
    )
}

export default MyBeerIndex