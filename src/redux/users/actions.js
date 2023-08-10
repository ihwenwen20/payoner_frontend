import {
  START_FETCHING_USERS,
  SUCCESS_FETCHING_USERS,
  ERROR_FETCHING_USERS,
  // SET_KEYWORD,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';
import { clearNotif } from '../notif/actions';

let debouncedFetchUsers = debounce(getData, 1000);

export const startFetchingUsers = () => {
  return {
    type: START_FETCHING_USERS,
  };
};

export const successFetchingUsers = ({ users }) => {
  return {
    type: SUCCESS_FETCHING_USERS,
    users,
  };
};

export const errorFetchingUsers = () => {
  return {
    type: ERROR_FETCHING_USERS,
  };
};

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingUsers());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      // let params = {
      //   keyword: getState().users.keyword,
      // };

      // let res = await debouncedFetchUsers('/users', params);
      let res = await debouncedFetchUsers('/users');

      // res.data.data.forEach((res) => {
      //   res.avatar = res.image.name;
      // });

      dispatch(
        successFetchingUsers({
          users: res.data.data.result,
        })
      );
    } catch (error) {
      dispatch(errorFetchingUsers());
    }
  };
};

// export const setKeyword = (keyword) => {
//   return {
//     type: SET_KEYWORD,
//     keyword,
//   };
// };
