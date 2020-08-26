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
import Img3 from '../img/service_3.jpg';
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

function CardComponent3() {

  const classes = useStyles();

  return (
    <Card className={classes.root}  style={{height: "95%", display: "flex", flexDirection: "column"}}>
      <CardActionArea>
        <Link to="/leistung3">
          <CardMedia
            className={classes.media}
            alt="Zubehört für die Geburtsvorbereitung"
            component="img"
            image={Img3}
            title="Geburtsvorbereitung"
          />
        </Link>
        <Link to="/leistung3">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link to="/leistung3" className={classes.headerStyle}>
                Geburts&shy;vor&shy;bereitung
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize: "0.875em"}}>
              Ein privater Kurs, sowohl alleine als auch zu zweit, bereitet dich bzw. euch individuell auf die bevor&shy;stehende Geburt vor.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link to="/leistung3">
          <Button size="small">
            <Link className={classes.buttonTextStyle} to="/leistung3">Mehr Infos</Link>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardComponent3;
