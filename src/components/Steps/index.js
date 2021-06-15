import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import {
  Container,
  Grid,
  Divider,
  Box,
  Typography,
  CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Step from "./Step";

const useStyles = makeStyles({
  progressCircleContainer: {
    display: "flex",
    justifyContent: "center"
  },
  topCircle: {
    color: "#13a779",
    position: "absolute",
    left: 0
  },
  bottomCircle: {
    color: "#edeff0"
  },
  headingSection: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  progressSection: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

export default function Steps(props) {
  const styles = useStyles();

  function ProgressCircle(value) {
    return (
      <Box
        marginLeft={1}
        position="relative"
        className={styles.progressCircleContainer}
      >
        <CircularProgress
          variant="determinate"
          value={100}
          size={22}
          thickness={10}
          className={styles.bottomCircle}
        />
        <CircularProgress
          variant="determinate"
          value={-15}
          size={22}
          thickness={10}
          className={styles.topCircle}
        />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box paddingBottom={1}>
        <Grid container spacing={0}>
          <Grid item xs={8} className={styles.headingSection}>
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              Next Steps
            </Typography>
          </Grid>
          <Grid item xs={4} className={styles.progressSection}>
            10% completed <ProgressCircle />
          </Grid>
        </Grid>
      </Box>
      <Divider />

      {props.stepsData.map((obj, i) => {
        return (
          <div key={i}>
            <Step completed={obj.completed} title={obj.title} />
            <Divider />
          </div>
        );
      })}

      <Box
        display="flex"
        justifyContent="flex-end"
        paddingRight={3.5}
        paddingTop={2}
      >
        <Router>
          <NavLink to="/" style={{ color: "#13a779" }}>
            See all tasks
          </NavLink>
        </Router>
      </Box>
    </Container>
  );
}
