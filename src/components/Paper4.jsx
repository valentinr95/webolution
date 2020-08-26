import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Pic from "../img/wochenbett_details.jpg";
import Pic_slim from "../img/wochenbett_details_slim.jpg";

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

export default function Paper4() {
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
                  <img src={Pic_slim} className="paper-img-style-slim" alt="Hebamme Anita wiegt ein Neugeborenes" />
                </div>
                <div className="col-12 paper-text-style-slim">
                  <h1 className="paper-header">Wochenbett&shy;betreuung</h1>
                  <hr className="hr-duck" />
                  <p>
                    Die erste Zeit zuhause mit einem neu&shy;geborenen Baby ist wohl die schönste und größte Heraus&shy;forderung im Leben der Eltern.
                  </p>
                  <p>
                    In der Wochenbett&shy;betreuung geht es vor allem um die <strong>Kontrolle der Rückbildung</strong> und <strong>Wundheilung nach der Geburt</strong>, um <strong>Stillberatung</strong> und <strong>Babypflege</strong>.
                  </p>
                  <p>
                    Bei dem Start in einen neuen Lebens&shy;abschnitt unterstütze ich euch gerne, stressfrei und in eurer gewohnten Umgebung.
                  </p>
                  <br />
                  <p>
                    <strong>Kosten: 90 Euro</strong> (werden nach Ein&shy;reichung der Rechnung von der Kranken&shy;kasse teil&shy;weise re&shy;fundiert)
                  </p>
                  <div className="arrow-div">
                    <Link to="/services/#leistung4" ><i className="fa fa-arrow-left" /></Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 paper-col-img-style">
                  <img src={Pic} alt="Hebamme Anita wiegt ein Neugeborenes" className="paper-img-style"/>
                </div>
                <div className="col-lg-8 col-md-6 paper-text-style">
                  <h1 className="paper-header">Wochenbett&shy;betreuung</h1>
                  <hr className="hr-duck" />
                  <p>
                    Die erste Zeit zuhause mit einem neu&shy;geborenen Baby ist wohl die schönste und größte Heraus&shy;forderung im Leben der Eltern.
                  </p>
                  <p>
                    In der Wochenbett&shy;betreuung geht es vor allem um die <strong>Kontrolle der Rück&shy;bildung</strong> und <strong>Wund&shy;heilung nach der Geburt</strong>, um <strong>Still&shy;beratung</strong> und <strong>Baby&shy;pflege</strong>.
                  </p>
                  <p>
                    Egal ob du ambulant nachhause gehen möchtest oder ob du die ersten Tage im Krankenhaus verbringst.
                    Bei dem Start in einen neuen Lebens&shy;abschnitt unterstütze ich euch gerne, stress&shy;frei und in eurer gewohnten Umgebung.
                  </p>
                  <br />
                  <p>
                    <strong>Kosten: 90 Euro</strong> (werden nach Ein&shy;reichung der Rechnung von der Kranken&shy;kasse teil&shy;weise re&shy;fundiert)
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
