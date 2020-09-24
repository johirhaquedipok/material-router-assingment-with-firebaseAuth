import { Button, Container, Typography, makeStyles } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Header from "../../header/Header";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(5),
  },
  paraMargin: {
    marginTop: "1em",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Booking = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        
      </Grid>
      <Container maxWidth="lg">
        <Grid container xs={12}>
          <Grid item xs={12} md={6} className={classes.control}>
            <Typography variant="h1" align="justify">
              Cox's Bazar
            </Typography>
            <Typography
              variant="body1"
              align="justify"
              className={classes.paraMargin}
            >
              The Auto-layout makes the items equitably share the available
              space. That also means you can set the width of one item and the
              others will automatically resize around it.
            </Typography>
          </Grid>
          {/* Form started */}
          <Grid item xs={12} md={6} className={classes.control}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Book Here
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Origin"
                  name="Origin"
                  autoComplete="text"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Destination"
                  name="Destination"
                  autoComplete="text"
                  autoFocus
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <div>
                      <label for="T">From</label>
                      </div>
                    <div>
                    <TextField type="date" required fullWidth autoFocus />
                    </div>

                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <div>
                      <label for="T">To</label>
                      </div>
                    <div>
                    <TextField type="date" required fullWidth autoFocus />
                    </div>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Start Booking
                </Button>
              </form>
            </div>
          </Grid>
          {/* Form ended */}
        </Grid>
      </Container>
    </div>
  );
};

export default Booking;
