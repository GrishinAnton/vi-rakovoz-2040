import React from "react";
import { BookRecomendation } from "../BookRecomendation/BookRecomendation";
import Container from "@material-ui/core/Container";
import { Header } from "./../Header/Header";

export const Main = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <div>SLIDER</div>
      <BookRecomendation />
      <div>Мероприятия</div>
      <div>Кружки</div>
    </Container>
  );
};
