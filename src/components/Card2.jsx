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
import Img2 from '../img/service_2.jpg';
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

function CardComponent2() {

  const classes = useStyles();

  return (
    <Card className={classes.root}  style={{height: "95%", display: "flex", flexDirection: "column"}}>
      <CardActionArea>
        <Link to="/leistung2">
          <CardMedia
            component="img"
            alt="Zubehör für die Schwangerenvorsorge"
            className={classes.media}
            image={Img2}
            title="Schwangerenvorsorge"
          />
        </Link>
        <Link to="/leistung2">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/leistung2" className={classes.headerStyle}>
                Schwangeren&shy;vorsorge
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "0.87em"}}>
              Rat und Tat bei üblichen Beschwerden, oder einfach ein Kennen&shy;lernen. Ich besuche dich gerne bereits in der Schwanger&shy;schaft.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link to="/leistung2">
          <Button size="small">
            <Link className={classes.buttonTextStyle} to="/leistung2">Mehr Infos</Link>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardComponent2;
