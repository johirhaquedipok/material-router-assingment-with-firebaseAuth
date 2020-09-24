import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Booking from "./booking/Booking";
import FinalInfo from "../finalInfo/FinalInfo";
import Grid from "@material-ui/core/Grid";
import React from "react";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(3),
  },
  card: {
    maxWidth: 250,
  },
  media: {
    height: 400,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
     
      <Container maxWidth="lg">
        <Grid container xs={12}>
          <Grid item xs={12} md={4} className={classes.control}>
            <Typography variant="h2">Auto-layout</Typography>

            <Typography variant="body1" align="justify">
              The Auto-layout makes the items equitably share the available
              space. That also means you can set the width of one item and the
              others will automatically resize around it.
            </Typography>
            <Button variant="contained" color="Primary">
              Visit There
            </Button>
          </Grid>
          {/* second half of grid started */}
          <Grid item xs={12} md={8} className={classes.control}>
            <Grid container>
              {/* first image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}>
                      <img
                        width="100%"
                        src="https://images.unsplash.com/photo-1600280108805-655e0f010e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
                        alt=""
                      ></img>
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* secon image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}>
                      <img
                        width="100%"
                        src="https://images.unsplash.com/photo-1600280108805-655e0f010e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
                        alt=""
                      ></img>
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* 3rd image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}>
                      <img
                        width="100%"
                        src="https://images.unsplash.com/photo-1600280108805-655e0f010e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
                        alt=""
                      ></img>
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* image grid ended */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
