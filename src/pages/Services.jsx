import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardComponent1 from '../components/Card1';
import CardComponent2 from '../components/Card2';
import CardComponent3 from '../components/Card3';
import CardComponent4 from '../components/Card4';

function Services() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <div className="row service-row">
        <div id="big-leistung" className="col-2">
        </div>
        <div id="big-leistung" className="col-2">
          <CardComponent1 />
        </div>
        <div id="big-leistung" className="col-2">
          <CardComponent2 />
        </div>
        <div id="big-leistung" className="col-2">
          <CardComponent3 />
        </div>
        <div id="big-leistung" className="col-2">
          <CardComponent4 />
        </div>
        <div id="big-leistung" className="col-2">
        </div>
        <div id="leistung1" className="col-lg-3 col-md-6 col-sm-12">
          <CardComponent1 />
        </div>
        <div id="leistung2" className="col-lg-3 col-md-6 col-sm-12">
          <CardComponent2 />
        </div>
        <div id="leistung3" className="col-lg-3 col-md-6 col-sm-12">
          <CardComponent3 />
        </div>
        <div id="leistung4" className="col-lg-3 col-md-6 col-sm-12">
          <CardComponent4 />
        </div>
      </div>
      <Footer />
      <br />
    </div>
  );
}

export default Services;
