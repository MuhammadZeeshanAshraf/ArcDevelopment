import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },

  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },

  mainContainer: {
    position: "absolute",
  },

  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export default function Footer() {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Services
            </Grid>
            <Grid item className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item className={classes.link}>
              Mobile App Development
            </Grid>
            <Grid item className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              The Revolution
            </Grid>
            <Grid item className={classes.link}>
              Vision
            </Grid>
            <Grid item className={classes.link}>
              Technology
            </Grid>
            <Grid item className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              About Us
            </Grid>
            <Grid item className={classes.link}>
              History
            </Grid>
            <Grid item className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="Black Decotative Slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
}
