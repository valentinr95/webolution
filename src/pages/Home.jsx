import React from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import CookieConsent from "react-cookie-consent";


function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <br />
      <Footer />
      <br />
      <CookieConsent
        location="bottom"
        buttonText="Verstanden"
        cookieName="HebammeAnita"
        style={{ background: "rgba(56, 62, 86, 0.7)", color: "white" }}
        buttonStyle={{ color: "rgba(56, 62, 86, 1.0)", borderRadius: "2%", fontSize: "13px", background: "#eedad1" }}
        expires={150}
      >
      Um dir ein angenehmes Online-Erlebnis zu bieten, setzen wir Cookies ein. Durch die weitere Nutzung der Website stimmst du der Verwendung von Cookies zu.</CookieConsent>
    </div>
  );
}

export default Home;
