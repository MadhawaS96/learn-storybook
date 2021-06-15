import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles({
  leftColumn: {
    display: "flex",
    justifyContent: "center",
    padding: 10
  },
  midColumn: {
    display: "flex",
    alignItems: "center",
    padding: 10
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  icon: {
    fontSize: 34,
    color: "#13a779"
  }
});

export default function Step(props) {
  const styles = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={1} className={styles.leftColumn}>
        {props.completed ? (
          <CheckCircleOutlineIcon className={styles.icon} />
        ) : (
          <RadioButtonUncheckedIcon className={styles.icon} />
        )}
      </Grid>
      
      <Grid item xs={9} className={styles.midColumn}>
        {props.title}
      </Grid>

      <Grid item xs={2} className={styles.rightColumn}>
        {!props.completed ? (
          <Router>
            <NavLink to="/" style={{ color: "#13a779" }}>
              Start
            </NavLink>
          </Router>
        ) : (
          <span></span>
        )}
      </Grid>
    </Grid>
  );
}
