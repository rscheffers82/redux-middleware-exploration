import {
  FETCH_USERS
} from './types';

export var fetchUsers = () => {
  return {
    type: FETCH_USERS,
    payload: [
      {
        name: 'Roy Scheffers',
        Company: 'RoyCode',
        Email: 'r.scheffers@roycode.io'
      },{
        name: 'Zorana Telebak',
        Company: 'Black Belt Proofreader',
        Email: 'zorana@blackbeltproofreader.com'
      },{
        name: 'Dirk Brinkmans',
        Company: 'Extreme Car Tuning',
        Email: 'mattie@extremecartuning.com'
      }
    ]
  };
}
