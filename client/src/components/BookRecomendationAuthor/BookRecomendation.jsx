import React, { useState, useEffect } from "react";
import "./BookRecomendation.scss";
import BookCard from "../BookCard";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import * as R from "ramda";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "20px",
    marginBottom: "15px",
  },
  sss: {
    display: "flex",
  },
}));

export const BookRecomendationAuthor = () => {
  let { userId } = useParams();
  const { persons } = useSelector((state) => state.persons);
  const currentData = persons && persons.filter((item) => item.id == userId);
  const allItem =
    currentData &&
    R.map(
      (item) =>
        R.map(
          (item) => R.map((item) => item, item.list_of_recommendations),
          item.recommendations.by_author
        ),
      currentData
    );

  const [remove, setRemove] = useState([]);
  const classes = useStyles();

  const removeBookHandle = (bookName) => {
    setRemove((oldArray) => [...oldArray, bookName]);
  };

  const [personName, setPersonName] = React.useState([]);

  const flatData =
    allItem &&
    R.flatten(
      R.values(
        R.map(
          (item) =>
            R.map(
              (item) => R.map((item) => item, item),
              personName.length ? R.pickAll(personName, item) : item
            ),
          allItem
        )[0]
      )
    );

  const flatKey =
    allItem &&
    R.flatten(
      R.keys(
        R.map(
          (item) => R.map((item) => R.map((item, i) => item, item), item),
          allItem
        )[0]
      )
    );

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <div className={classes.sss}>
        <Typography variant="h5" component="h5" className={classes.title}>
          Книжные рекомендации по Автору
        </Typography>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {flatKey.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="books">
        {flatData ? (
          flatData.map((item, i) => {
            return R.includes(item.name, remove) ? null : (
              <BookCard
                book={item}
                key={i}
                bookId={i}
                removeHandler={removeBookHandle}
              />
            );
          })
        ) : (
          <span>Ушли собирать рекомендации... </span>
        )}
      </div>
    </div>
  );
};
