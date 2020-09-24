import { Box, Container, Link, Typography } from "@material-ui/core";

import React from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/home" href="#">
        Programming Hero(johir haque dipok)
      </Link>{" "}
      {new Date().getFullYear()}
      
    </Typography>
  );
}
const Footer = () => {
  return (
    <Container>
      <Box mt={5}>
        <Copyright></Copyright>
      </Box>
    </Container>
  );
};

export default Footer;
