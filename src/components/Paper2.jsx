import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pic from "../img/schwangerenvorsorge_details.jpg";
import Pic_slim from "../img/schwangerenvorsorge_details_slim.jpg";

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

export default function Paper2() {
  const classes = useStyles();
  document.querySelector('body').scrollTo(0,0);

  return (
    <div className={classes.root}>
      <Paper
        elevation={10}
        children={
          <div>
            <div>
              <div className="row">
                <div className="col-12">
                  <img src={Pic_slim} className="paper-img-style-slim" alt="Hebamme Anita bei der Geburtsvorbereitung" />
                </div>
                <div className="col-12 paper-text-style-slim">
                  <h1 className="paper-header">Schwangeren&shy;vorsorge</h1>
                  <hr className="hr-duck" />
                  <p>
                    Der früh&shy;zeitige und kontinuier&shy;liche Kontakt mit Hebammen bringt <strong>langfristig erwiesene Vorteile</strong> für Mama und Kind. In den Wochen vor der Geburt deines Kindes komme ich gerne zu dir nach&shy;hause und wir sprechen über deine Schwangerschaft.
                  </p>
                  <p>
                    Bei dem Besuch kontrolliere ich außerdem deinen Blut&shy;druck und Harn, die Lage sowie die Herz&shy;töne des Kindes und gebe Tipps bei eventuellen Beschwerden während der Schwangerschaft.
                  </p>
                  <p>
                    Falls du beispielsweise eine Betreuung im Wochen&shy;bett wünschst, können wir uns gerne hierbei in Ruhe kennenlernen.
                  </p>
                  <br />
                  <p>
                    <strong>Kosten: 90 Euro</strong>
                  </p>
                  <div className="arrow-div">
                    <Link to="/services/#leistung2" ><i className="fa fa-arrow-left" /></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 paper-col-img-style">
                  <img src={Pic} alt="Hebamme Anita bei der Geburtsvorbereitung" className="paper-img-style"/>
                </div>
                <div className="col-lg-8 col-md-6 paper-text-style">
                  <h1 className="paper-header">Schwangeren&shy;vorsorge</h1>
                  <hr className="hr-duck" />
                  <p>
                    Der frühzeitige und kontinuierliche Kontakt mit Hebammen bringt <strong>langfristig erwiesene Vor&shy;teile</strong> für Mama und Kind. In den Wochen vor der Geburt deines Kindes komme ich gerne zu dir nach&shy;hause und wir sprechen über deine Schwanger&shy;schaft.
                  </p>
                  <p>
                    Bei dem Besuch kontrolliere ich außerdem deinen Blut&shy;druck und Harn, die Lage sowie die Herz&shy;töne des Kindes und gebe Tipps bei eventuellen Schwangerschafts&shy;beschwerden.
                  </p>
                  <p>
                    Falls du beispiels&shy;weise eine Betreuung im Wochenbett wünschst, können wir uns gerne hierbei in Ruhe kennenlernen.
                  </p>
                  <br />
                  <p>
                    <strong>Kosten: 90 Euro</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
