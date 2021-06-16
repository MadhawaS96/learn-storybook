import React, { useEffect, useState } from "react";
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

export default function Steps({stepsData, allTaskLink}) {
  const styles = useStyles();

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let completeCount = 0;
    stepsData.forEach((prop) => {
      if (prop.completed) completeCount++;
    });

    if (completeCount === 7) setPercentage(100);
    else setPercentage(completeCount * 15);
  }, [stepsData]);

  function ProgressCircle() {
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
          value={percentage * -1}
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
            <Typography variant="body2">{percentage}% completed</Typography>
            <ProgressCircle />
          </Grid>
        </Grid>
      </Box>
      <Divider />

      {stepsData.map(({ completed, title, link }, i) => {
        return (
          <div key={i}>
            <Step completed={completed} title={title} link={link}/>
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
          <NavLink to={allTaskLink} style={{ color: "#13a779" }}>
            <Typography variant="body1">See all tasks</Typography>
          </NavLink>
        </Router>
      </Box>
    </Container>
  );
}
