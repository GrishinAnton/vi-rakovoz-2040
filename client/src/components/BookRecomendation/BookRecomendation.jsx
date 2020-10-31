import "./BookRecomendation.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { notification } from "../../utils";
import React from "react";

const books = [
  { id: 1, name: "1", author: "a", rating: 5, actions: [] },
  { id: 2, name: "2", author: "b", rating: 4, actions: [] },
  { id: 3, name: "3", author: "c", rating: 3, actions: [] },
  { id: 4, name: "4", author: "d", rating: 2, actions: [] },
  { id: 5, name: "5", author: "e", rating: 1, actions: [] },
];

export const BookRecomendation = () => {
  const handleClickButton = () => {
    notification("bookFavorite");
  };

  return (
    <div className="books">
      {books.map((book) => (
        <Card className="books__book" key={book.id}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {book.author}
            </Typography>
            <Typography variant="h5" component="h2">
              {book.name}
            </Typography>
            <Typography color="textSecondary">
              Рейтинг: {book.rating}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClickButton}>
              Сейчас читаю
            </Button>
            <Button size="small" onClick={handleClickButton}>
              Хочу прочитать
            </Button>
            <Button size="small" onClick={handleClickButton}>
              Прочитана
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
