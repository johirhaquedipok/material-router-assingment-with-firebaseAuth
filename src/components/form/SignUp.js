import "firebase/auth";

import * as firebase from "firebase/app";

import {Link, useHistory} from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecoration:'none'
  },
}));




const Signup = () => {

  const classes = useStyles();
  // using history
  const history = useHistory ();
    // state for sign UP
    const [user, setUser] = useState({
      isSignedIn: false,
      name: "",
      fname: '', 
      lname: '',
      email: "",
      password: "",
      photo: "",
      newuser : false,
      error: "",
      success: false,
    });
    const handleBlur = (event) => {
      let isFormValid = true;
      if (event.target.name === "email") {
        isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
      }
      if (event.target.value === "password") {
        isFormValid = /\d/.test(event.target.value);
      }
      if (isFormValid) {
        const newUserInfo = { ...user };
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);
      }
    };

    // Update Users Profile


    const updateUsersDetails = (fname, lname, email)  => {
          const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: fname,
        lastName: lname,
        email: email,
        
      }).then(function() {
        console.log('update successfully')
        // Update successful.
      }).catch(function(error) {
        console.log(error)
        // An error happened.
      });
    }

    // Update users Profile Ends


    // handle submit
    const handleSubmit = (event) => {
      if (user.email && user.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUsersDetails(user.fname, user.lname, user.email)
            history.push('/finalinfo')
          })
          .catch((error) => {
            // Handle Errors here.
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
  
            // ...
          });
      }
      console.log("submit");
      event.preventDefault();
    };
    // test log in end
    // google popup sign in
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          const { displayName, email, photoURL } = res.user;
          const SignedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
          };
          setUser(SignedInUser);
        })
        .then((err) => {
          console.log(err);
        });
    };
    // google popup sign in ends

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
         {/* error message */}
         <Typography color="error" align="center">
          <br/>
          {user.error}
        </Typography>
        {/* success message message */}
        <Typography color="primary" align="center">
          <br/>
          {user.success && <p>User Created succesfully</p>}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              onBlur={handleBlur}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onBlur={handleBlur}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          
          <div>
          <Button
              type="submit"
              value='submit'
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </div>
          

          <Grid container justify="center">
            <Grid item>
              <Link to='signin' href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        <Grid container justify="center">
          <Grid item>
            <Box mt={2}>
              <Typography variant="body2">Or</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* extra sign in  buttons  */}
        <Grid container justify="center">
          {/* facebook button */}

        <div>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            <Box mr={4}>
              <span class="material-icons">facebook</span>
            </Box>
            Continue With Facebook
          </Button>
        </div>

          {/* goolge button */}

         <div>
         <Button
          onClick={handleSignIn}
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            <Box mr={4}>
              <span class="material-icons">mail</span>
            </Box>
            Continue With Google
          </Button>
         </div>
        </Grid>
        {/* extra sign ends */}
      </div>
    </Container>
  );
};

export default Signup;
