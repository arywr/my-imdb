import { FETCH_FILM, GET_FILM } from '../types'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FILM:
            return {
                ...state,
                ...action.payload
            }
        case FETCH_FILM:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}