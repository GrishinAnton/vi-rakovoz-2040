import React, { useState, useEffect } from "react";
import "./BookRecomendation.scss";
import BookCard from "../BookCard";
import { useSelector } from "react-redux";

export const BookRecomendation = () => {
  const { persons } = useSelector((state) => state.persons);
  const [books, setBooks] = useState([]);

  console.log(books);

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
      <h3>Рекомендации</h3>
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
