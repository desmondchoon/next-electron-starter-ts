import { TestActionTypes, TEST_ACTION } from "./types";

const initialState = {
  loading: false,
  error: null
}

export default (state = initialState, action: TestActionTypes) => {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state }
    default:
      return state
  }
}