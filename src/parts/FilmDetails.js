import React from 'react'
import PosterFilm from 'parts/PosterFilm'
import FilmDescription from 'parts/FilmDescriptions'

export default function FilmDetails({data}) {
    return (
        <main className="section-film-details" style={{minHeight: "100vh"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <PosterFilm data={data} />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <FilmDescription data={data} />
                    </div>
                </div>
            </div>
        </main>
    )
}
