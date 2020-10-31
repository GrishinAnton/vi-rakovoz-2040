import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TuneIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "10px",
    },
    input: {
      width: "100%",
    },
    icon: {
      display: "flex",
      justifyContent: "center ",
      cursor: "pointer",
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Grid
        container
        className={classes.root}
        spacing={1}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <div>ВИ-РаКоВоз-2040</div>
        </Grid>
        <Grid item xs={8}>
          <OutlinedInput
            className={classes.input}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={1} className={classes.icon}>
          <TuneIcon fontSize="large" onClick={handleClick} />
        </Grid>
        <Grid item xs={1} className={classes.icon}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid>
      </Grid>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
      </Popover>
    </>
  );
};
