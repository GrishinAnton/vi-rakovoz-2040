import React, { useState, useEffect } from "react";
import "./BookRecomendation.scss";
import BookCard from "../BookCard";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import * as R from "ramda";
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "20px",
    marginBottom: "15px",
  },
}));

export const BookRecomendation = () => {
  let { userId } = useParams();
  const { persons } = useSelector((state) => state.persons);
  const currentData = persons && persons.filter((item) => item.id == userId);
  const allItem =
    currentData &&
    R.map(
      (item) =>
        R.map(
          (item) => R.map((item) => item, item.list_of_recommendations),
          item.recommendations.by_genre
        ),
      currentData
    );

  const [books, setBooks] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    setBooks(persons.length ? persons[0]["Прочитано"] : []);
  }, [persons]);

  const removeBookHandle = (bookName) => {
    const bks = [...books];
    const index = bks.findIndex((b) => b.name === bookName);
    bks.splice(index, 1);
    setBooks(bks);
  };
  const flatData =
    allItem &&
    R.flatten(
      R.values(
        R.map(
          (item) => R.map((item) => R.map((item, i) => item, item), item),
          allItem
        )[0]
      )
    );

  return (
    <div>
      <Typography variant="h5" component="h5" className={classes.title}>
        Книжные рекомендации по Жанру
      </Typography>
      <div className="books">
        {flatData ? (
          flatData.map((item, i) => (
            <BookCard
              book={item}
              key={i}
              bookId={i}
              removeHandler={removeBookHandle}
            />
          ))
        ) : (
          <span>Ушли собирать рекомендации... </span>
          // <BookCard
          //     book={book}
          //     key={i}
          //     bookId={i}
          //     removeHandler={removeBookHandle}
          //   />
        )}
      </div>
    </div>
  );
};
