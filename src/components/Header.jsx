import React from "react";
import {Link} from "react-router-dom";
import Logo from "../img/logo_final.jpg";
import Navbar from "./HeaderNavbar";

function Header() {
  return (
    <div>
      <div id="logo-div-style">
        <Link to="/home">
          <img id="logo-style"src={Logo} alt="Logo von Hebamme Anita"></img>
        </Link>
      </div>
      <div id="div-navbar">
        <Navbar />
      </div>
    </div>


  );
}

export default Header;
