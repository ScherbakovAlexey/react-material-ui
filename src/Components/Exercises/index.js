import React from "react";
import { Grid, Paper } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default props => (
  <div>
    <Grid container>
      <Grid item sm>
        <Paper style={{ padding: 20, marginBottom: 10, marginTop: 10 }}>
          Left
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={{ padding: 20, marginBottom: 10, marginTop: 10 }}>
          Right
        </Paper>
      </Grid>
    </Grid>
    <LinearProgress />
    <br />
    <LinearProgress color="secondary" />
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary" style={{ margin: 20 }}>
      Primary
    </Button>
    <Button variant="contained" color="secondary" style={{ margin: 20 }}>
      Secondary
    </Button>
    <Button
      variant="contained"
      color="secondary"
      disabled
      style={{ margin: 20 }}
    >
      Disabled
    </Button>
    <Button
      variant="contained"
      href="#contained-buttons"
      style={{ margin: 20 }}
    >
      Link
    </Button>
  </div>
);
