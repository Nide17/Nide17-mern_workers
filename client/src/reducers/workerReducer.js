//where we will check the actions and send payload
// import { v4 as uuid } from 'uuid';
import { GET_WORKERS, ADD_WORKER, DELETE_WORKER, WORKERS_LOADING } from '../actions/types';

const initialState = {
    workers: [],
    loading: false
};
 
export default function (state = initialState, action) {
    switch (action.type) {

        case GET_WORKERS:
            return {
                ...state,
                workers: action.payload,
                loading: false
            };

        case DELETE_WORKER:
            return {
                ...state,
                workers: state.workers.filter(worker => worker._id !== action.payload)
            };

        case ADD_WORKER:
            return {
                ...state,
                workers: [action.payload, ...state.workers]
            };

        case WORKERS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}
