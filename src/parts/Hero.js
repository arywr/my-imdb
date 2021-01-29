import React from 'react'
import SearchFilm from 'parts/SearchFilm'
import Fade from 'react-reveal/Fade'

export default function Hero(props) {
    const { data } = props

    return (
        <section className="section-hero container">
            <div className="row align-items-center">
                <div className="col">
                    <Fade bottom>
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Discover Your 
                                <br/>
                                Favourite Film Anytime
                            </h1>
                            <p className="hero-description">
                                Saving much time by finding the match one
                                <br/>
                                using our algorithm that we designed
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
