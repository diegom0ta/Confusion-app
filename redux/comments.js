import * as ActionTypes from './ActionTypes';

export const comments = (
  state = {
    errMsg: null,
    comments: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMsg: null, comments: action.payload};
    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMsg: action.payload, comments: []};
    case ActionTypes.ADD_COMMENT:
      return {...state, errMsg: null, comments: action.payload};
    default:
      return state;
  }
};
