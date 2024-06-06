'use strict';

// Handle an action ... actions are an object that have 2 properties
// 1: type - the type of action that is being dispatched
// 2: payload - the data that is being sent to the reducer
const ourReducer = (state, action) => {

  switch (action.type) {
    case 'NEW_REQUEST':
      return { ...state, request: action.payload }

    case 'SET_JSON':
      return { ...state, json: action.payload }

    case 'ADD_HISTORY':
      return { ...state, history: [...state.history, action.payload] }

    default:
      return state;
  }
}

export default ourReducer;


/*
  let action = { type: 'INCREMENT'};
  let initialState = { count: 0 };
  let expectedState = { count: 1 };
  expect (ourReducer(initialState, action)).toEqual(expectedState);
*/
