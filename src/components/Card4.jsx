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
import Img4 from '../img/service_4.jpg';
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
    color: "rgba(56, 62, 86, 1)",
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

function CardComponent4() {

  const classes = useStyles();

  return (
    <Card className={classes.root}  style={{height: "95%", display: "flex", flexDirection: "column"}}>
      <CardActionArea>
        <Link to="/leistung4">
          <CardMedia
            className={classes.media}
            alt="Mutter mit ihrem Kind"
            component="img"
            image={Img4}
            title="Wochenbett-Betreuung"
          />
        </Link>
        <Link to="/leistung4">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/leistung4" className={classes.headerStyle}>
                Wochenbett-Betreuung
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "0.875em"}}>
              Hausbesuche können dir helfen, Vertrauen und Sicher&shy;heit bei den ver&shy;schiedenen Um&shy;stellungen nach der Geburt zu erlangen.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link to="/leistung4">
          <Button size="small">
            <Link className={classes.buttonTextStyle} to="/leistung4">Mehr Infos</Link>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardComponent4;
