import Avatar from '@material-ui/core/Avatar';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignIn = () => {
  const classes = useStyles();
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
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            
          </Grid>
          <Grid container justify="center" >
                <Grid item>
                <Box mt={2}>
                    <Typography  variant="body2">
                    Or
                </Typography>
                </Box>
            </Grid>
          </Grid>
          {/* extra starts */}
          {/* extra sign in  buttons  */}
          <Grid container justify="center">
              {/* facebook button */}
            
                
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
                >
                <Box mr={4}>
                <span class="material-icons">
                facebook
                </span>
                </Box>
                   
                Continue With Facebook
                </Button>
           
            {/* goolge button */}
            
                
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
                >
                <Box mr={4}>
                <span class="material-icons">
                mail
                </span>
                </Box>
                   
                Continue With Google
                </Button>
            
           </Grid>
        </form>
      </div>
    </Container>
    );
};

export default SignIn;