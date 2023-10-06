import { GET_ERRORS, EMPTY_ERRORS } from "./../../types";

const initialState = {
  error: null,
};

const errorReducer=  (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                error: action.payload
            };
        case EMPTY_ERRORS:
            return initialState;
        default:
            return state;
    }
}
export default errorReducer
