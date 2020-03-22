import {
    get
} from 'lodash'
import {
    SEARCH_MOVIE_START,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_COMPLETE
} from '../../consts/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return {
                ...state,
                isLoading: true,
                movies: null
            };
        break;
        case SEARCH_MOVIE_COMPLETE:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                movieResults: get(action, 'results.data')
            };
        break;
        case SEARCH_MOVIE_ERROR:
            return {
                ...state,
                isLoading: false,
                movies: null
            };
        break;
        default: 
            return {
            ...state
        }

    }
}