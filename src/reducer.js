'use strict';

// Handle an action ... actions are an object that have 2 properties
// 1: type - the type of action that is being dispatched
// 2: payload - the data that is being sent to the reducer
const _Reducer = (state, action) => {

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

export default _Reducer;

