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
                <h4 className="film-description-title">Duration</h4>
                <p className="film-description-about">
                    {data ? data.length : ""}
                </p>
                <h4 className="film-description-title">Rating</h4>
                <p className="film-description-about">
                    {data ? data.rating : ""}
                </p>
                <h4 className="film-description-title">Rating Votes</h4>
                <p className="film-description-about">
                    {data ? data.rating_votes : ""}
                </p>
            </div>
        </Fade>
    )
}
