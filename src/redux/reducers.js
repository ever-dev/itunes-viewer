export const rootReducer = (
  state = {
    entities: [],
    fetching: false
  },
  action
) => {
  switch (action.type) {
    case 'GET_ENTITY':
      return { ...state, fetching: true };
    case 'RECEIVE_ENTITIES':
      return { ...state, fetching: false, entities: action.entities.results };
    default:
      return state;
  }
};
