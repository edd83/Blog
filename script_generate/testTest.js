const LOAD = 'redux-example/testTest/LOAD';
const LOAD_SUCCESS = 'redux-example/testTest/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/testTest/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function testTest(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoadedTestTest(globalState) {
  return globalState.testTest && globalState.testTest.loaded;
}

export function loadTestTest() {
  return {
    types: [
      LOAD, LOAD_SUCCESS, LOAD_FAIL
    ],
    promise: (client) => client.get('/loadTestTest', {data: {}})
  };
}
