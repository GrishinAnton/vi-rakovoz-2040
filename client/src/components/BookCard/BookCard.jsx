import React, { useState } from "react";
import "./BookCard.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { notification } from "../../utils";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

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
          <ButtonGroup size="small">
            <Button size="small" onClick={handleReactionButtonClick}>
              <ThumbUpAltIcon />
            </Button>
            <Button size="small" onClick={handleReactionButtonClick}>
              <ThumbDownIcon />
            </Button>
            <Button size="small" onClick={handleReactionButtonClick}>
              Двойственное впечатление
            </Button>
          </ButtonGroup>
        </CardActions>
      ) : (
        <CardActions>
          <ButtonGroup size="small">
            <Button size="small" onClick={handleReadButtonClick}>
              Прочитано
            </Button>
            <Button size="small" onClick={handleClickButton}>
              Не интересно
            </Button>
            <Button size="small" onClick={handleClickButton}>
              В закладки
            </Button>
          </ButtonGroup>
        </CardActions>
      )}
    </Card>
  );
};

export default BookCard;
