import {
  USER_NAME
} from '../actions/common.js'

const initialState = {
    user: {
      'name':'小熊'
    }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        user: action.data
      }
    default:
      return state
  }
}
