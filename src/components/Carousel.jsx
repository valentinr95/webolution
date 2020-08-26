import React from "react";
import Img1 from '../img/carousel_1.jpg';
import Img1_slim from '../img/carousel_1_slim.jpg';
import Img2 from '../img/carousel_2.jpg';
import Img2_slim from '../img/carousel_2_slim.jpg';
import Img3 from '../img/carousel_3.jpg';
import Img3_slim from '../img/carousel_3_slim.jpg';

function Carousel() {
  return(
    <section>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleControls" data-slide-to="1"></li>
          <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <img className="carousel-img" src={Img1} alt="Hebamme Anita mit Baby"/>
            <img className="carousel-img-slim" src={Img1_slim} alt="Hebamme Anita mit Baby"/>
          </div>
          <div className="carousel-item container-fluid">
            <img className="carousel-img" src={Img2} alt="Baby in den Armen der Hebamme Anita"/>
            <img className="carousel-img-slim" src={Img2_slim} alt="Baby in den Armen der Hebamme Anita"/>
          </div>
          <div className="carousel-item container-fluid">
            <img className="carousel-img" src={Img3} alt="Hebamme Anita erklärt den Mutter Kind Pass"/>
            <img className="carousel-img-slim" src={Img3_slim} alt="Hebamme Anita erklärt den Mutter Kind Pass"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Carousel;
