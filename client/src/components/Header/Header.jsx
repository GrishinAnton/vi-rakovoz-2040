import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TuneIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export const Header = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <div>Logo команды</div>
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <OutlinedInput
            id="standard-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={1}>
        <TuneIcon fontSize="large" />
      </Grid>
      <Grid item xs={1}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Grid>
    </Grid>
  );
};
