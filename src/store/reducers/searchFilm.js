import { FETCH_FILM, SEARCH_FILM } from '../types'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_FILM:
            return action.payload
        case FETCH_FILM:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}