import React from 'react'
import Fade from 'react-reveal/Fade'

export default function FilmDescriptions({data}) {
    return (
        <Fade bottom delay={1000}>
            <div className="film-descriptions pl-0 pl-lg-3">
                <h4 className="film-description-title">About the Film</h4>
                <p className="film-description-about">
                    {data ? data.plot : ""}
                </p>
            </div>
        </Fade>
    )
}
