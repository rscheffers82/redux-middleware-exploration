import axios from 'axios';
import {
  FETCH_USERS
} from './types';

const request = axios.get('http://jsonplaceholder.typicode.com/users');
export var fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: request
  };
}
