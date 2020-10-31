import React from "react";
import { BookRecomendation } from "../BookRecomendation/BookRecomendation";
import Container from '@material-ui/core/Container';

export const Main = () => {
  return (
    <Container maxWidth='lg'>
      <div>Header</div>
      <div>SLIDER</div>
      <BookRecomendation />
      <div>Мероприятия</div>
      <div>Кружки</div>
    </Container>
  )
};
