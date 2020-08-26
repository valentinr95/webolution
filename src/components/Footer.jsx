import React from "react";
import { Link } from "react-router-dom";

let year = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer-style">
    <hr className="footer-rule" />
    <p className="copyright-text">© Anita Langmaier {year} - <Link to="/informationen" style={{color: "#d4b5b0"}}>Datenschutzerklärung & Impressum</Link> </p>
    <p className="copyright-text-slim">© Anita Langmaier {year}<br /><Link to="/informationen" style={{color: "#d4b5b0"}}>Datenschutzerklärung & Impressum</Link> </p>
    </div>
  );
}

export default Footer;
