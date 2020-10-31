import React, { useState, useEffect } from "react";
import "./BookRecomendation.scss";
import BookCard from "../BookCard";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "20px",
    marginBottom: "15px",
  },
}));

export const BookRecomendation = () => {
  const { persons } = useSelector((state) => state.persons);
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

  return (
    <div>
      <Typography variant="h5" component="h5" className={classes.title}>
        Книжные рекомендации
      </Typography>
      <div className="books">
        {!!books.length &&
          books.map((book, i) => (
            <BookCard
              book={book}
              key={i}
              bookId={i}
              removeHandler={removeBookHandle}
            />
          ))}
      </div>
    </div>
  );
};
