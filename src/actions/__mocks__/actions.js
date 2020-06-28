// import { LOGGED_OUT, USER_LOGGED_IN } from '../actions';

// export const handleLoginProps = () => {
//   console.log('login called');
//   return Promise.resolve({
//     logged_in: true,
//     user: { username: 'MouhamadouDiouf', password: 'password' },
//     cars: [],
//     books: [],
//   });
// };

export const handleLogin = () => {
  return Promise.resolve({
    type: 'USER_LOGGED_IN',
    data: {
      logged_in: true,
      user: { username: 'MouhamadouDiouf', password: 'password' },
      cars: [],
      books: [],
    },
  });
};

export const fetchUserBookings = () => {
  console.log('hello from fetchuser');
  return Promise.resolve({
    books: [],
  });
};

// export const handleLogin = (user) => (dispatch) => {
//   dispatch({
//     type: IS_FETCHING_USER,
//   });
//   axios
//     .post('http://localhost:3001/login', { user }, { withCredentials: true })
//     .then((response) => {
//       setTimeout(() => {
//         if (response.data.logged_in === true) {
//           dispatch({
//             type: USER_LOGGED_IN,
//             data: response.data,
//           });
//         } else {
//           dispatch({
//             type: LOGIN_ERROR,
//             data: response.data,
//           });
//         }
//       }, 1000);
//     });
// };
