import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TuneIcon from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { notification } from "../../utils";
import { useDispatch } from "react-redux";
import { disabledActivity } from "./../../features/settings/settings.slice";
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
    popover: {
      padding: "15px",
    },
    item: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(10);
  const [value2, setValue2] = React.useState(20);
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handlerOnChangeSearch = () => {
    notification("search");
  };

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.name === "checkedA") notification("settingsActivity");
    if (event.target.name === "checkedA") dispatch(disabledActivity());
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeSliderUp = (event, newValue) => {
    notification("settingsUp");
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const handleClickOpenSettings = (event) => {
    setAnchorEl(event.currentTarget);
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
          <b>ВИ-РаКоВоз-2040</b>
        </Grid>
        <Grid item xs={8}>
          <OutlinedInput
            onBlur={handlerOnChangeSearch}
            className={classes.input}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={1} className={classes.icon}>
          <TuneIcon fontSize="large" onClick={handleClickOpenSettings} />
        </Grid>
        <Grid item xs={1} className={classes.icon}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid>
      </Grid>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.popover}>
          <Typography className={classes.typography}>
            Настройка рекомендательного сервиса
          </Typography>
          <Grid item className={classes.item}>
            <Typography className={classes.typography}>
              Больше научной литератры
            </Typography>
            <Slider
              value={value}
              onChange={handleChange}
              onChangeCommitted={handleChangeSliderUp}
            />
          </Grid>

          <Grid item className={classes.item}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChangeCheckbox}
                  name="checkedA"
                  color="primary"
                />
              }
              label="Не рекомендовать мероприятия"
            />
          </Grid>
          {!state.checkedA && (
            <Grid item className={classes.item}>
              <Typography className={classes.typography}>
                Больше мероприятий
              </Typography>
              <Slider value={value2} onChange={handleChange2} />
            </Grid>
          )}
          <Grid item className={classes.item}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChangeCheckbox}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Не рекомендовать кружки"
            />
          </Grid>
        </div>
      </Popover>
    </>
  );
};
