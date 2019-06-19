import axios from 'axios';
import * as types from '../constants';
import { dataConverter } from '../utils/recursionFormatter';

const API = 'https://gist.githubusercontent.com/burakcan/ca77e8fc11a1455cc1962ad7318b8fbc/raw/b446a09888882df7273f17d2ff7ebf4820de4152/dataset.json';

const setData = (data) => ({
  type: types.GET_DATA,
  payload: dataConverter(data)
})

const errorHandling = (message) => ({
  type: types.ERROR,
  message: message
})

export const removeFilter = (id) => ({
  type: types.REMOVE_FILTER,
  id: id
})

export const fetchData = () => {
  return (dispatch) => {
    axios.get(API)
      .then(response => {
        dispatch(setData(response.data));
      })
      .catch(err => {
        dispatch(errorHandling(err.data));
      })
  }
}

