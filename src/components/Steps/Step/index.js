import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
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

const Step = ({ completed, title, link }) => {
  const styles = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={1} className={styles.leftColumn}>
        {completed ? (
          <CheckCircleOutlineIcon className={styles.icon} />
        ) : (
          <RadioButtonUncheckedIcon className={styles.icon} />
        )}
      </Grid>

      <Grid item xs={9} className={styles.midColumn}>
        <Typography variant="body1">{title}</Typography>
      </Grid>

      <Grid item xs={2} className={styles.rightColumn}>
        {!completed ? (
          <Router>
            <NavLink to={link} style={{ color: "#13a779" }}>
              <Typography variant="body1">Start</Typography>
            </NavLink>
          </Router>
        ) : (
          <span></span>
        )}
      </Grid>
    </Grid>
  );
};

Step.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

Step.defaultProps = {
  completed: false,
  title: "",
  link: ""
};

export default Step;
