import React from "react";
import Ente from "../img/ente2.png";

let currentDate = new Date();
let day = currentDate.getDate();
(day < 10) ? day = "0"+day : day = day;
let month = currentDate.getMonth()+1;
(month < 10) ? month = "0"+month : month = month;
let year = currentDate.getFullYear();
let dateAsString = year + "-" + month + "-" + day;

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <div className="contact-h3-style"style = {{textAlign: "center", paddingTop:"3%"}}>
          <h2 style = {{fontSize: "2.5em", color: "#383e56"}}>Kontaktiere mich.</h2>
          <p className="contact-h3-slim">Du kannst dich gerne per Mail oder Telefon bei mir melden.</p>
          <p className="contact-h3">Falls du mich kennenlernen möchtest oder Fragen hast, kannst du dich gerne bei mir per Mail oder Telefon melden.</p>
        </div>
        <div className = "row " style = {{padding: "3%", textAlign: "center"}}>
          <div className = "col-lg-5 col-sm-12">
            <div>
              <form
                className="form2"
                onSubmit={this.submitForm}
                action="https://formspree.io/mwkrzvgd"
                method="POST"
              >
                <div className="heading2"><strong>E-MAIL VERFASSEN</strong>
                </div>
                <div className="p2" type="Name: ">
                  <input className="input2" type="text" name="name" placeholder="Füge hier deinen Namen ein.."></input>
                </div>
                <div className="p2" type="E-Mail: ">
                  <input className="input2" type="email" name="email" placeholder="Wie kann ich dich kontaktieren.."></input>
                </div>
                <div className="p2" type="Errechneter Geburtstermin: ">
                  <input className="input4" type="date" min={dateAsString} name="termin" placeholder="Voraussichtliches Geburtsdatum.."></input>
                </div>
                <div className="p2" type="Nachricht: ">
                  <textarea className="input3" type="text" name="message" placeholder="Was möchtest du mir mitteilen.."></textarea>
                </div>
                <div className="contact-button-div">
                  {status === "SUCCESS" ? <div className="absende-text"><p className="absende-text-error">Danke!</p></div> : <button className="submit button2">Absenden</button>}
                  {status === "ERROR" && <div className="absende-text"><p className="absende-text-error">Ohje. Ein Fehler ist aufgetreten.</p></div>}
                </div>
                <div className="div2">
                  Ich freue mich auf deine Nachricht! <img src={Ente} alt="briefträger ente" className="ente-img"/>
                </div>
              </form>
            </div>
          </div>
          <div className = "col-lg-7 col-sm-12">
            <iframe className="google-maps" allowTransparency={true} height="400em" frameBorder={0} style = {{boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)", float:"left", background: "white"}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAh5JW-Gubod8aAx6eFW-F3skyKoaIz6LI&q=Brunn+am+Gebirge,Niederoesterreich+Oesterreich&zoom=12" allowFullScreen />
            <div className="container second-portion">
              <div className="row information-circles">
                <div className="col-xs-12 col-sm-12 col-lg-4">
                    <div className="box">
                      <div className="icon">
                        <div className="image"><i className="fa fa-map-marker" aria-hidden="true" /></div>
                        <div className="info">
                          <h3 className="title">Ort</h3>
                          <p id="contact-card-text">
                            <i className="fa fa-map-marker" aria-hidden="true" />
                            <br></br>
                            Bezirk Mödling<br></br>
                            und Umgebung
                          </p>
                        </div>
                      </div>
                      <div className="space" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-lg-4">
                    <div className="box">
                      <div className="icon">
                        <div className="image"><i className="fa fa-mobile" aria-hidden="true" /></div>
                        <div className="info">
                          <h3 className="title">Telefon</h3>
                          <p id="contact-card-text">
                            <i className="fa fa-mobile" aria-hidden="true" />
                            <br></br>
                            (+43) 680 1116684
                          </p>
                        </div>
                      </div>
                      <div className="space" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-lg-4">
                    <div className="box">
                      <div className="icon">
                        <div className="image"><i className="fa fa-envelope" aria-hidden="true" /></div>
                        <div className="info">
                          <h3 className="title">E-Mail</h3>
                          <p id="contact-card-text">
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <br></br>anitalangmaier&#8203;@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="space" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
