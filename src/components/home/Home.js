import { Button, Container, makeStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Header from "./header/header";
import React from "react";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(5),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Header></Header>
      </Grid>
      <Container maxWidth="lg">
        <Grid container xs={12}>
          <Grid item xs={12} md={6} className={classes.control} >
           <h2>Auto-layout</h2>
           <p>The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.</p>
           <Button>Visit There</Button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.control}>
          <h2>Auto-layout</h2>
           <p>The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.</p>
           <Button>Visit There</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
