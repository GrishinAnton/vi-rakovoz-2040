import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "10px",
    marginTop: "15px",
  },
  cell: {
    verticalAlign: "top",
  },
}));

export const LoginPage = () => {
  const classes = useStyles();

  const { persons } = useSelector((state) => state.persons);
  console.log(persons);
  return (
    persons && (
      <Container maxWidth="lg">
        <Typography variant="h5" component="h5" className={classes.title}>
          Авторизованные пользователи
        </Typography>
        <div></div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {persons &&
                  persons.map((user, i) => (
                    <TableCell key={i}>
                      <Link to={`/profile/${user.id}`}>{user.fio}</Link>
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {persons && (
                <TableRow>
                  {persons.map((item, i) => (
                    <TableCell key={i} className={classes.cell}>
                      {item.user_history.map((book, i) => (
                        <>
                          <b>Прочитанные книги</b>
                          <p>{`Название: ${book.name}`}</p>
                          <p>{`Автор: ${book.author}`}</p>
                          <p>{`Жанр: ${book.genre}`}</p>
                          <hr />
                        </>
                      ))}
                    </TableCell>
                  ))}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  );
};
