import React, { useState } from "react";
import "./BookCard.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { notification, randomNumber } from "../../utils";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    height: "62px",
    overflow: "auto",
  },
}));

const BookCard = ({ book, bookId, removeHandler, rating }) => {
  const [showReactionButtons, setShowReactionButtons] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const classes = useStyles();

  const handleClickButton = () => {
    notification("bookFavorite");
  };

  const handleClickBookmarkButton = () => {
    if (isBookmarked) {
      notification("bookmarkedDelete");
    } else {
      notification("bookmarked");
    }
    setIsBookmarked(!isBookmarked);
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
    book && (
      <Card className="books_book" key={bookId}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {book.author}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {book.genre}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.title}>
            {book.name}
          </Typography>
          <Typography color="textSecondary" className="book__rating">
            Рейтинг:
            <Rating name="read-only" value={rating} readOnly />
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
              <Button
                size="small"
                onClick={handleClickBookmarkButton}
                color={isBookmarked ? "primary" : "default"}
                variant={isBookmarked ? "contained" : "outlined"}
              >
                В закладки
              </Button>
            </ButtonGroup>
          </CardActions>
        )}
      </Card>
    )
  );
};

export default BookCard;
