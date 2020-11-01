import { createBrowserHistory } from "history";
import { NotificationManager } from "react-notifications";

export const history = createBrowserHistory({});

const metricData = {
  book: {
    favorite: {
      title: "Книга добавлена в избранное",
      metric: "Плюс к обучению",
    },
    bookmarked: {
      title: "Книга добавлена в закладки",
      metric: "Ваши рекомендации скорректированы",
    },
    bookmarkedDelete: {
      title: "Книга удалена из закладок",
      metric: "Ваши рекомендации скорректированы",
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
      metric: "Изменение отображения мероприятий",
      title: "Изминение настроек рекомендаций",
    },
    search: {
      metric: "Метрика поиска по проекту",
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
    case "bookmarked":
      NotificationManager.success(
        metricData.book.bookmarked.metric,
        metricData.book.bookmarked.title,
        3000
      );
      break;
    case "bookmarkedDelete":
      NotificationManager.warning(
        metricData.book.bookmarkedDelete.metric,
        metricData.book.bookmarkedDelete.title,
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
    case "search":
      NotificationManager.success(
        metricData.settings.search.metric,
        metricData.settings.search.title,
        3000
      );
      break;
  }
};

export const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
