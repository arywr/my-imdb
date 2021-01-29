import React from 'react'
import Fade from 'react-reveal/Fade'

export default function PageDetailsTitle({data}) {
    return (
        <section className="section-detail-film container spacing-sm">
            <Fade bottom>
                <div className="row align-items-center">
                    <div className="col text-center">
                        <h2 className="detail-title">{data.title}</h2>
                        <span className="detail-description">{data.year}</span>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
