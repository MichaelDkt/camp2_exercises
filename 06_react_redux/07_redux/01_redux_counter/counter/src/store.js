import { createStore } from 'redux'

const startCounter = {counter : 10}

function updateCounter(state = startCounter, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'sub':
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state
  }
}

let store = createStore(updateCounter);

console.log(store.getState());

export default store;
