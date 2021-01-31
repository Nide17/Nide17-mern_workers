// hhtp client 
import axios from 'axios';
//where actions to the backend
import { GET_WORKERS, ADD_WORKER, DELETE_WORKER, WORKERS_LOADING } from '../actions/types';

// Thunk here allows to make asyncronous requests with the redux dispatcher
export const getWorkers = () => dispatch => {
    dispatch(setWorkersLoading());
    axios
        .get('/api/workers/')
        .then(res =>
            dispatch({
                type: GET_WORKERS,
                payload: res.data
            })
        );
};

//instead of id it takes the whole worker
export const addWorker = (worker) => dispatch => {

    axios
        .post('/api/workers', worker)
        .then(res =>
            dispatch({
                type: ADD_WORKER,
                payload: res.data
            })
        )
};

export const deleteWorker = (id) => dispatch => {

    axios
        .delete(`/api/workers/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_WORKER,
                payload: id
            })
        )
};

export const setWorkersLoading = () => {
    //Return an action to the reducer
    return {
        //action 
        type: WORKERS_LOADING

    };
};