import React from "react";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img1 from '../img/service_1.jpg';
import { sizing } from '@material-ui/system';


const useStyles = makeStyles({
  root: {
    color: "#383e56",
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2em"
  },
  buttonTextStyle: {
    color: "#383e56",
    '&:hover': {
      color: "#d4b5b0",
    },
    fontSize: "1em",
  },
  headerStyle: {
    color: "#383e56",
    '&:hover': {
      color: "rgba(56, 62, 86, 0.9)",
    },
    fontSize: "1em",
  },

});

function CardComponent1() {

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{height: "95%", display: "flex", flexDirection: "column"}}>
      <CardActionArea>
        <Link to="/leistung1">
          <CardMedia
            className={classes.media}
            alt="Mutterkindpass Gespräch"
            component="img"
            image={Img1}
            title="Mutter-Kind-Pass"
          />
        </Link>
        <Link to="/leistung1">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/leistung1" className={classes.headerStyle}>
                Mutter-Kind-Pass
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "0.875em"}}>
              Dieses kostenlose Gespräch kann einen ersten Kontakt zur Hebamme dar&shy;stellen und Fragen in der Schwanger&shy;schaft klären.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link to="/leistung1">
          <Button size="small">
            <Link className={classes.buttonTextStyle} to="/leistung1">Mehr Infos</Link>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardComponent1;
