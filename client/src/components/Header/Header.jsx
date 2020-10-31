import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export const Header = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Paper>xs=12</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>xs=6</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>xs=6</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>xs=6</Paper>
      </Grid>
    </Grid>
  );
};
