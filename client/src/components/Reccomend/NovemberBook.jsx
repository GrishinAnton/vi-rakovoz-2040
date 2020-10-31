import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { person } from "../../mocks";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export const NovemberBook = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <Typography variant="h6" component="h6" className={classes.title}>
            Подборка книг для осенних вечеров
          </Typography>
        </GridListTile>
        {person[0]["Рекомендации"].map((book, i) => (
          <GridListTile key={i}>
            <img
              src={book.img}
              alt={`${book["Название"]} ${book["Жанр"]} ${book["Автор"]}`}
            />
            <GridListTileBar
              title={book["Название"]}
              //   subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={book["Название"]}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
