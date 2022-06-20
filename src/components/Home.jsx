import React from "react";
import allBeers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <img src={allBeers} alt="beers" />
        <Link to="/beers">Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div>
        <img src={NewBeer} alt="new-beer" />
        <Link to="/new-beers">New Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div>
        <img src={RandomBeer} alt="random-beer" />
        <Link to="/random-beers">Random Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default Home;
