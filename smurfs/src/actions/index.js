import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export function FetchSmurf() {
    return dispatch => {
        dispatch({type: SMURF_START});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res);
                dispatch({
                    type: SMURF_SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: SMURF_FAILURE,
                    payload: err
                });
            });
    };
}
export function AddSmurf(name, age, height) {
    return dispatch => {
        axios
            .post('http:localhost:333/smurfs', {
                name: name,
                age: age,
                height: height
            })
            .then(res => {
                dispatch({
                    type: ADD_SMURF,
                    payload: res.data
                });
            })
            .catch(err => {
                throw err;
            });
    };
}

export function DeleteSmurf(id) {
    return dispatch => {
        axios
            .delete(`http://localhost:333/smurfs/${id}`)
            .then(res => {
                dispatch({ type: DELETE_SMURF, payload: res.data });
            })
            .catch(err => {
                throw err;
            });
    };
}