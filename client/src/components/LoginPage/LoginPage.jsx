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

const users = [
  {
    id: 1,
    name: "Иванов И.И.",
    books: [
      { name: "Анна Каренина", author: "Лев Толстой" },
      { name: "Автостопом по галактике", author: "Дуглас Адамс" },
      { name: "Алиса в стране чудес", author: "Льюис Кэрролл" },
      // { name: 'Алхимик', author: 'Пауло Коэльо' },
      // { name: 'Американский Психопат', author: 'Брет Истон Эллис' },
    ],
  },
  {
    id: 2,
    name: "Петров И.И.",
    books: [
      { name: "БДВ, или большой и добрый великан", author: "Роальд Даль" },
      { name: "Белый пик", author: "Энтони Хоровитц" },
      { name: "Библия ядовитого леса", author: "Барбара Кингсолвер" },
      // { name: 'Благие знамения', author: 'Терри Пратчетт и Нил Гейман' },
      // { name: 'Большие надежды', author: 'Чарльз Диккенс' },
    ],
  },
  {
    id: 3,
    name: "Сидоров И.И.",
    books: [
      { name: "Гарри Поттер и кубок огня", author: "Джоан Роулинг" },
      { name: "Гарри Поттер и философский камень", author: "Джоан Роулинг" },
      { name: "Гарри Поттер и тайная комната", author: "Джоан Роулинг" },
      // { name: 'Гарри Поттер и узник Азкабана', author: 'Джоан Роулинг' },
      // { name: 'Гордость и предубеждение', author: 'Джейн Остен' },
    ],
  },
];

export const LoginPage = () => {
  return (
    <Container maxWidth="lg">
      <div>Заголовок рекомендательного сервиса</div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {users.map((user, i) => (
                <TableCell key={i}>
                  <Link to={`/profile/${user.id}`}>{user.name}</Link>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.name}>
                {user.books.map((book, i) => (
                  <TableCell key={i} component="th" scope="row">
                    {book.name}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
