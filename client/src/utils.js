import { createBrowserHistory } from "history";
import { NotificationManager } from "react-notifications";

export const history = createBrowserHistory({});

const metricData = {
  book: {
    favorite: {
      title: "Книга добавлена в избранное",
      metric: "Плюс к обучению",
    },
    reviewed: {
      title: "Книга оценена",
      metric: "Ваши рекомендации скорректированы",
    },
  },
  settings: {
    book: {
      metric: "Плюс к научпоп",
      title: "Изминение настроек рекомендаций",
    },
    disabledActivity: {
      metric: "Не учитывать мероприятия",
      title: "Изминение настроек рекомендаций",
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
      break;
    case "settingsUp":
      NotificationManager.warning(
        metricData.settings.book.metric,
        metricData.settings.book.title,
        3000
      );
      break;
    case "settingsActivity":
      NotificationManager.warning(
        metricData.settings.disabledActivity.metric,
        metricData.settings.disabledActivity.title,
        3000
      );
      break;
    case "bookReviewed":
      NotificationManager.success(
        metricData.book.reviewed.metric,
        metricData.book.reviewed.title,
        3000
      );
      break;
  }
};

export const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
