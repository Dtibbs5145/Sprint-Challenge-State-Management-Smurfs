import {
    SMURF_START,
    SMURF_FAILURE,
    SMURF_SUCCESS,
    ADD_SMURF,
    DELETE_SMURF
} from '.../actions';

export const initialState = {
    smurfs: [
        {
            name: '',
            age: '',
            height: '',
            id: ''
        }
    ],
    isLoading: false,
    error: ''
};

export function reducer (state = initialState, action) {
    switch (action.type) {
        case SMURF_START:
                return {
                    ...state,
                    isLoading: true,
                    error: ''
                };
        case SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurf: action.payload,
                error: ''
            };
        case SMURF_FAILURE:
            return {
                ...state,
                isLoading: false,
                smurf: action.payload,
                error: ''
            };
        case ADD_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            };
        case DELETE_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            };
            default:
                return state;
            }
    }
