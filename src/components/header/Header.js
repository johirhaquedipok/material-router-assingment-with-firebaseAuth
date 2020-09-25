import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Travel Guru
          </Typography>
          <nav>
            <Typography>
            <Link
              to="/home"
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Home
            </Link>

            <Link to='/Booking'
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Booking
            </Link>
            <Link to='/finalinfo'
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Places
            </Link>
            <Link to="/signin" className={classes.link}>
              <Button href="#" color="secondary" variant="contained">
                Login
              </Button>
            </Link>
            <Link className={classes.link} to="/signup">
              <Button
                
                href="#"
                variant="contained"
                color="primary"
                className={classes.link}
              >
                SignUp
              </Button>
            </Link>
            </Typography>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
