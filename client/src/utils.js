import { createBrowserHistory } from "history";
import { NotificationManager } from "react-notifications";

export const history = createBrowserHistory({});

const metricData = {
  book: {
    favorite: {
      title: "Книга добавлена в избранное",
      metric: "Плюс к обучению",
    },
  },
};

export const notification = (messageType) => {
  switch (messageType) {
    case "bookFavorite":
      NotificationManager.warning(
        metricData.book.favorite.metric,
        metricData.book.favorite.title,
        3000
      );
  }
};
