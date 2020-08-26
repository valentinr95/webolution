import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Img1 from '../img/about_me_scroll_img1.jpg';
import Img1_slim from '../img/about_me_scroll_img1_slim.jpg';
import Profil from '../img/profilbild.jpg';
import Profil_slim from '../img/profilbild_slim.jpg';


class AboutMe extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="img-holder-slim" style={{backgroundImage: "url(" + Img1_slim + ")"}}>
          <div className="about-me-heading">
            <p>
              <p style={{lineHeight: "0.4em"}}>Schön, </p>
              <p style={{lineHeight: "0.1em", paddingLeft: "1em"}}>dass du hier bist. </p>
            </p>
          </div>
        </div>
        <div className="img-holder" style={{backgroundImage: "url(" + Img1 + ")"}}>
          <div className="about-me-heading">
            <p>
              <p style={{lineHeight: "0.4em"}}>Schön, </p>
              <p style={{lineHeight: "0.1em", paddingLeft: "1em"}}>dass du hier bist. </p>
            </p>
          </div>
        </div>
        <div className="holder2">
          <div className="row">
            <div className="col-lg-9 col-md-8 about-me-div2">
                <div className="about-me-heading2">
                  <p>
                    <p style={{lineHeight: "1em", textAlign: "center"}}>Frohnatur. Warmherzig. Begeisterungsfähig. </p>
                  </p>
                </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <img className="about-me-pic" src={Profil} alt="Profilbild Anita Langmaier" />
              <img className="about-me-pic-slim" src={Profil_slim} alt="Profilbild Anita Langmaier" />
            </div>
          </div>
        </div>
        <div className="holder3">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p className="div3-heading">
                ÜBER MICH
              </p>
              <p className="div3-text">
                <ul>
                  <li>1993 geboren und aufgewachsen in Brunn am Gebirge</li>
                  <li>2017 Abschluss des Studiums zur Hebamme an der FH Campus Wien</li>
                  <li>2017-2020 Krankenhaus Göttlicher Heiland & St. Josef Krankenhaus Wien (Ambulanz, Kreißsaal und Wochenbettstation)</li>
                  <li>seit Februar 2020 Krankenhaus Mödling (Ambulanz, Kreißsaal und Wochenbettstation)</li>
                </ul>
              </p>
            < /div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p className="div3-heading">
                FORT- & WEITER&shy;BILDUNG
              </p>
              <p className="div3-text">
                <ul>
                  <li>seit 2018 Akupunktur für Hebammen (in Ausbildung)</li>
                  <li>2019 Spinning Babies (Gail Tully)</li>
                  <li>2020 Europäisches Institut für Stillen und Laktation: Basisseminar Stillzeit</li>
                  <li>regelmäßiges Notfalltraining</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className = "holder4">
          <div class="blockquote-wrapper">
            <div class="blockquote">
              <h1>
                "I don‘t care what kind of birth you have... I care that you had options, that you were supported in your choices, and you were respected."
              </h1>
              <h4>&mdash;January Harshe<br></br></h4>
            </div>
          </div>
        </div>
        <Footer />
        <br />
      </div>
    );
  }
}

export default AboutMe;
