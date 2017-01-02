import {
  FETCH_USERS
} from './types';

export var fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: [
      {
        name: 'Roy Scheffers'
      },{
        name: 'Zorana Telebak'
      },{
        name: 'Dirk Brinkmans'
      }
    ]
  };
}
