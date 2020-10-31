import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { NovemberBook } from "./NovemberBook";
import { NovemberMr } from "./NovemberMr";
import { NovemberKr } from "./NovemberKr";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginBottom: "10px",
  },
  tab: {
    display: "flex",
    paddingTop: "10px",
    justifyContent: "space-around",

    "& > div:not(:last-child)": {
      marginRight: "10px",
    },
  },
}));

function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  );
}

export const Reccomend = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { isActivity } = useSelector((state) => state.settings);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Ноябрь" />
          <Tab label="Декабрь" disabled />
          <Tab label="Январь" disabled />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tab}>
        <NovemberBook />
        {isActivity && <NovemberMr />}
        <NovemberKr />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Декабрь
      </TabPanel>
      <TabPanel value={value} index={2}>
        Январь
      </TabPanel>
    </div>
  );
};
