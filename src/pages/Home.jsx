import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p><Link to="/services">Services</Link></p>
      <p><Link to="/contact">Contact</Link></p>
      <p><Link to="/404">NotFoundPage</Link></p>
    </div>
  );
}

export default Home;
