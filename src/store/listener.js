import store from './index';

let currentAuth;

function listener() {
  let previousAuth = currentAuth;

  currentAuth = store.getState().auth;

  if (currentAuth !== previousAuth) {
    localStorage.setItem('userInfo', JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
