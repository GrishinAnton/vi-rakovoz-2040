import React from "react";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import Container from '@material-ui/core/Container';

export const Main = () => {
  return (
    <Container maxWidth='lg'>
      <ProfilePage />
    </Container>
  )
};
