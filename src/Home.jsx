import React from "react";
import "./Home.scss";
import PopCard from "./PopCard";
import { Link } from "react-router-dom";




const Home = () => {
  return (
    <div className="landingpage">
        <h2>browse Pops?</h2>
                <Link to="/popContainer"> 
        <button>Browse Pops</button>
        </Link> 
      <h2>Sell pops?</h2>
                    < >
                        <Link to="/login">
                        <button>Sell Pops?</button>
                        </Link>
                    </>
    </div>
  );
};

export default Home;
