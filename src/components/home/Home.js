import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import { NavLink as Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(3),
  },
  card: {
    maxWidth: 250,
  },
  media: {
    height: 330,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container xs={12}>
          <Grid item xs={12} md={4} className={classes.control}>
            <Typography variant="h3" style={{ textTransform: "uppercase" }}>
              COX'S BAZAR
            </Typography>

            <Typography
              variant="body1"
              align="justify"
              style={{ marginTop: "1em" }}
            >
              Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a
              city, fishing port, tourism centre and district headquarters in
              southeastern Bangladesh. It is famous mostly for its long natural
              sandy beach.
            </Typography>
            <Link to="/booking" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="Secondary"
                style={{ marginTop: "1em" }}
              >
                Booking
              </Button>
            </Link>
          </Grid>
          {/* second half of grid started */}
          <Grid item xs={12} md={8} className={classes.control}>
            <Grid container>
              {/* first image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}>
                      <Link to="/booking">
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80"
                          alt=""
                        ></img>
                      </Link>
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* secon image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}>
                      <Link to="/booking">
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1586948298331-a07cd866d3bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt=""
                        ></img>
                      </Link>
                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
              {/* 3rd image */}
              <Grid item xs={12} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia className={classes.media}>
                      <Link to="/booking">
                        <img
                          width="100%"
                          src="https://images.unsplash.com/photo-1597451407751-3cc60d5905de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                          alt=""
                        ></img>
                      </Link>
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
