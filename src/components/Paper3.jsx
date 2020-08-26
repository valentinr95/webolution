import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pic from "../img/geburtsvorbereitung_details.jpg";
import Pic_slim from "../img/geburtsvorbereitung_details_slim.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 'auto',
    '& > *': {
      width: '80%',
      margin: '3% auto 5% auto',
      color: '#383e56',
      backgroundColor: 'white',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/soft-wallpaper.png");',
    },
  },
}));

export default function Paper3() {
  const classes = useStyles();
  document.querySelector('body').scrollTo(0,0);

  return (
    <div className={classes.root}>
      <Paper
        elevation={20}
        children={
          <div>
            <div>
              <div className="row">
                <div className="col-12">
                  <img src={Pic_slim} className="paper-img-style-slim" alt="Hebamme Anita bereitet Mutter auf anstehende Geburt vor" />
                </div>
                <div className="col-12 paper-text-style-slim">
                  <h1 className="paper-header">Geburts&shy;vorbereitungs&shy;kurs</h1>
                  <hr className="hr-duck" />
                  <p>
                    Bei einem privaten Geburts&shy;vorbereitungs&shy;kurs, <strong>alleine oder mit deinem Partner/deiner Partnerin</strong>, können wir gezielt auf deine Fragen eingehen.
                  </p>
                  <p>
                    Wir besprechen Themen wie die letzten Wochen der <strong>Schwanger&shy;schaft</strong>, <strong>Wehen</strong>, <strong>Geburts&shy;phasen</strong>, <strong>Geburt</strong> und <strong>Still&shy;beginn</strong>. Auch <strong>Wehen- und Atem&shy;übungen</strong> sowie Unter&shy;stützungs&shy;möglich&shy;keiten seitens der Begleit&shy;person finden hier Platz. <br />
                    Der <strong>optimale Zeit&shy;punkt</strong> für einen Geburts&shy;vor&shy;bereitungs&shy;kurs ist zwischen der <strong>28. und 36. Schwanger&shy;schafts&shy;woche</strong>.<br /><br />Die Termine hierfür können wir gerne individuell ver&shy;einbaren.
                  </p>
                  <br />
                  <p>
                    <strong>Kosten: 240 Euro</strong>
                  </p>
                  <div className="arrow-div">
                    <Link to="/services/#leistung3" ><i className="fa fa-arrow-left" /></Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 paper-text-style">
                <h1 className="paper-header">Geburts&shy;vorbereitungs&shy;kurs</h1>
                <hr className="hr-duck" />
                <p>
                  Bei einem privaten Geburts&shy;vorbereitungs&shy;kurs, <strong>alleine oder mit deinem Partner/deiner Partnerin</strong>, können wir gezielt auf deine Fragen eingehen.
                </p>
                <p>
                  Wir besprechen Themen wie die letzten Wochen der <strong>Schwanger&shy;schaft</strong>, <strong>Wehen</strong>, <strong>Geburts&shy;phasen</strong>, <strong>Geburt</strong> und <strong>Still&shy;beginn</strong>. Auch <strong>Wehen- und Atem&shy;übungen</strong> sowie Unter&shy;stützungs&shy;möglich&shy;keiten seitens der Begleit&shy;person finden hier Platz. <br />
                  <br />Der <strong>optimale Zeit&shy;punkt</strong> für einen Geburts&shy;vor&shy;bereitungs&shy;kurs ist zwischen der <strong>28. und 36. Schwanger&shy;schafts&shy;woche</strong>. Die Termine hierfür können wir gerne individuell ver&shy;einbaren.
                </p>
                <br />
                <p>
                  <strong>Kosten: 240 Euro</strong>
                </p>
                </div>
                <div className="col-lg-4 col-md-6 paper-col-img-style">
                  <img src={Pic} alt="Hebamme Anita bereitet Mutter auf anstehende Geburt vor" className="paper-img-style"/>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
