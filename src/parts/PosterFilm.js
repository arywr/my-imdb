import React from 'react'
import Fade from 'react-reveal/Fade'

export default function PosterFilm({data}) {
    return (
        <Fade bottom delay={300}>
            <figure className="film-poster-img img-wrapper pr-0 pr-lg-3">
                <img src={data.poster} alt={data.title} width="100%" />
            </figure>
        </Fade>
    )
}
