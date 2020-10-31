import React, { useState } from "react";
import "./BookRecomendation.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { notification } from "../../utils";

const books = [
  {
    id: 5,
    name: "Лучший друг",
    author: "Эльдар Бродвей",
    rating: 10,
    actions: [],
  },
  {
    id: 1,
    name: "1",
    author: "a",
    rating: 5,
    img: "https://cdn1.ozone.ru/s3/multimedia-e/wc250/6020009318.jpg",
    actions: [],
  },
  {
    id: 2,
    name: "Нормальные люди",
    author: "Руни Салли",
    rating: 4,
    actions: [],
  },
  { id: 3, name: "Ведьмин вяз", author: "Френч Тана", rating: 3, actions: [] },
  { id: 4, name: "Поток", author: "Чиксентмихайи", rating: 2, actions: [] },
];

export const BookRecomendation = () => {
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
  };

  return (
    <div>
      <h3>Рекомендации</h3>
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
        ))}
      </div>
    </div>
  );
};
