import React from "react";
import { BookRecomendation } from "../BookRecomendation/BookRecomendation";
import { BookRecommendationCarusel } from "../BookRecommendationCarusel/BookRecommendationCarusel";
import Container from "@material-ui/core/Container";
import { Header } from "./../Header/Header";
import { Reccomend } from "../Reccomend/Reccomend";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "10px",
  },
}));

export const Main = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Header />
      <Typography variant="h5" component="h5" className={classes.title}>
        Ваш персональный гид
      </Typography>
      <Reccomend />
      <BookRecomendation />
      <BookRecommendationCarusel />
      <div>Мероприятия</div>
      <div>Кружки</div>
    </Container>
  );
};
