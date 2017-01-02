export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or, the payload does not have a .then property (being a promise)
    // don't bother about it and send it on.
    // when a .then is present on a promise, it has resolved
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    console.log('We don\'t have a promise');
    // next(action);
  }
}

// ES6 syntax of the middleware structure
// export default function({ dispatch }) {
//   return next => action => {
//     console.log(action);
//
//     next(action);
//   }
// }

// ES5 syntax that might make it a bit easier to ReactDOM
// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {
//       console.log(action);
//
//       next(action);
//     }
//   }
// }
