import Avatar from "@material-ui/core/Avatar";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// firebase installing and sing in and sing out practice;


// styling
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecoration: "none",
  },
}));
// styling ends

// main components starts
const SignIn = () => {
  const classes = useStyles();

  
  
  // google popup sign in ends
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      
    <form>
          {/* Email field */}
          <TextField
            
            required
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="text"
            autoComplete="email"
            autoFocus
            helperText="Use a valid email."
          />
          {/* password field */}
          <TextField
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
            helperText="Incorrect entry."
          />
          {/* submit with button of googlge sing in firebse dosent work with firebase sign in */}
          {/* <Link className={classes.submit}> */}
         <div>
         <Button
            type="submit"
            value="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
         </div>
          {/* </Link> */}
        </form>
        {/* extra starts */}
        {/* extra sign in  buttons  */}
        <Grid container justify="center">
          {/* passowrd rest*/}
          <Grid container>
            <Grid item xs>
              <Link to="" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="signup" href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Box mt={2}>
                <Typography variant="body2">Or</Typography>
              </Box>
            </Grid>
          </Grid>
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
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            <Box mr={4}>
              <span class="material-icons">mail</span>
            </Box>
            Sign Out
          </Button>
         </div>
         
         <div>
         <Button
              
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
        {/* extra ends */}
      </div>
    </Container>
  );
};

export default SignIn;
