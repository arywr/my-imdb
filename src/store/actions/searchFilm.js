import axios from 'axios'
import { SEARCH_FILM, FETCH_FILM } from '../types'

export const searchFilm = payload => dispatch => {
    dispatch({
        type: SEARCH_FILM,
        payload: payload
    })
}

export const fetchFilm = (title, page) => dispatch => {
    const options = {
        method: 'GET',
        url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${title}`,
        headers: {
            'x-rapidapi-key': 'a1f735bb57msha0d8bb5064ba2acp172b3ejsne810efc0d429',
            'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
        }
    };

    return axios.request(options).then(response => {
        dispatch({
            type: FETCH_FILM,
            payload: {
                [page]: response.data.titles
            }
        })
    })
}