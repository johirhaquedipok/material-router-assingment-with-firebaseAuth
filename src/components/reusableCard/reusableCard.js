import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
      display: "flex",
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 200,
    },
  });
const reusableCard = () => {
    const classes = useStyles();
    return (
        <div>
                  <Container maxWidth="lg" component="main">
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    This blog post shows
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    16 December
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Sed posuere consectetur est at lobortis. Cras mattis
                    consectetur purus sit amet fermentum.
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia}>
                  
                  <img
                    width="100%"
                    src="https://images.unsplash.com/photo-1600662110488-ec1e36ad9870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                    alt=""
                  ></img>
                </CardMedia>
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      </Container>
        </div>
    );
};

export default reusableCard;