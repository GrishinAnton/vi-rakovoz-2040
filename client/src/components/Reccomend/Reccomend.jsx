import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { NovemberBook } from "./NovemberBook";
import { NovemberMr } from "./NovemberMr";
import { NovemberKr } from "./NovemberKr";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginBottom: "10px",
  },
  tab: {
    display: "flex",
    paddingTop: "10px",

    "& > div:not(:last-child)": {
      marginRight: "10px",
    },
  },
}));

function TabPanel(props) {
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
        <NovemberMr />
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
