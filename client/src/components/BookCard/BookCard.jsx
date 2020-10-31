import React, { useState } from "react";
import "./BookCard.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { notification } from "../../utils";

const BookCard = ({ book, bookId, removeHandler }) => {
  const [showReactionButtons, setShowReactionButtons] = useState(false);

  const handleClickButton = () => {
    notification("bookFavorite");
  };

  const handleReadButtonClick = () => {
    setShowReactionButtons(true);
  };

  const handleReactionButtonClick = () => {
    notification("bookReviewed");
    setShowReactionButtons(false);
    removeHandler(book.name);
  };
  return (
    <Card className="books_book" key={bookId}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {book["Автор"]}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {book["Жанр"]}
        </Typography>
        <Typography variant="h5" component="h2">
          {book["Название"]}
        </Typography>
        <Typography color="textSecondary" className="book__rating">
          Рейтинг:
          <Rating name="read-only" value={book.raiting} readOnly />
        </Typography>
      </CardContent>
      {showReactionButtons ? (
        <CardActions>
          <Button size="small" onClick={handleReactionButtonClick}>
            Понравилось
          </Button>
          <Button size="small" onClick={handleReactionButtonClick}>
            Не понравилось
          </Button>
          <Button size="small" onClick={handleReactionButtonClick}>
            Двойственное впечатление
          </Button>
        </CardActions>
      ) : (
        <CardActions>
          <Button size="small" onClick={handleClickButton}>
            Сейчас читаю
          </Button>
          <Button size="small" onClick={handleClickButton}>
            Хочу прочитать
          </Button>
          <Button size="small" onClick={handleReadButtonClick}>
            Прочитано
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default BookCard;
