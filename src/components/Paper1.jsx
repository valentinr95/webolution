import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pic from "../img/mutterkindpass_details.jpg";
import Pic_slim from "../img/mutterkindpass_details_slim.jpg";

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

export default function Paper1() {
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
                  <img src={Pic_slim} className="paper-img-style-slim" alt="Mutterkindpassgespräch" />
                </div>
                <div className="col-12 paper-text-style-slim">
                  <h1 className="paper-header">Mutter-Kind-Pass Gespräch</h1>
                  <hr className="hr-duck" />
                  <p>
                    Seit einigen Jahren hast du im Mutter&shy;kindpass die Möglichkeit, neben den ärztlichen Unter&shy;suchungen, ein <strong>kostenloses Gespräch</strong> mit einer Hebamme zu führen. Dieses Gespräch ist zwischen der <strong>18. und 22. Schwangerschafts&shy;woche</strong> vorgesehen und dauert eine Stunde.
                  </p>
                  <p>
                    Hier können zum Beispiel Themen wie Ernährung, Schwangerschafts&shy;beschwerden, die Wahl deines Geburts&shy;ortes oder Fragen zum Wochen&shy;bett besprochen werden.
                  </p>
                  <br />
                  <p>
                    <strong>Kosten: 50 Euro</strong> (werden nach Einreichung der Rechnung von der Kranken&shy;kasse vollständig refundiert)
                  </p>
                  <div className="arrow-div">
                    <Link to="/services/#leistung1"><i className="fa fa-arrow-left" /></Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 paper-text-style">
                  <h1 className="paper-header">Mutter-Kind-Pass Gespräch</h1>
                  <hr className="hr-duck" />
                  <p>
                    Seit einigen Jahren hast du im Mutterkindpass die Möglichkeit, neben den ärztlichen Unter&shy;suchungen, ein <strong>kostenloses Gespräch</strong> mit einer Hebamme zu führen.
                    Dieses Gespräch ist <strong>zwischen der 18. und 22. Schwangerschafts&shy;woche</strong> vorgesehen und dauert eine Stunde.
                  </p>
                  <p>
                    Hier können zum Beispiel Themen wie Ernährung, Schwangerschafts&shy;beschwerden, die Wahl deines Geburts&shy;ortes oder Fragen zum Wochen&shy;bett besprochen werden.
                  </p>
                  <br />
                  <p>
                    <strong>Kosten: 50 Euro</strong> (werden nach Einreichung der Rechnung von der Kranken&shy;kasse vollständig refundiert)
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 paper-col-img-style">
                  <img src={Pic} alt="Mutterkindpassgespräch" className="paper-img-style"/>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}
