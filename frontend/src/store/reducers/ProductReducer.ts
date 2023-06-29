import { ACTIONS } from '../types/actions';

const initialState: InitialState = {
  listOfDelete: [],
};

interface InitialState {
  listOfDelete: string[];
}

interface StateAction {
  type: string;
  payload: string;
}

export const ProductReducer = (state = initialState, action: StateAction) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        listOfDelete: [...state.listOfDelete, action.payload],
      };
    case ACTIONS.REMOVE_PRODUCT:
      return {
        ...state,
        listOfDelete: state.listOfDelete.filter(item => {
          return item !== action.payload;
        }),
      };
    default:
      return state;
  }
};
