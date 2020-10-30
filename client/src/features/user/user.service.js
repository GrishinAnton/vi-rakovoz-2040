import Axios from 'axios';

/** Авторизация пользователя */
export const apiLoginUser = (requestData) =>
  Axios.post('/api/v2/accounts/login', requestData).then(({ data }) => data);
