import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import PageDetailsTitle from 'parts/PageDetailsTitle'
import Data from 'json/getFilm'
import FilmDetails from 'parts/FilmDetails'

import { fetchFilm } from 'store/actions/searchFilm'
import Footer from 'parts/Footer'

class DetailPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.title = "Film.co | Details"
        window.scrollTo(0,0)

        this.props.fetchFilm(this.props.title)
    }

    render() {
        return (
            <>
                <Header {...this.props} />
                <PageDetailsTitle {...this.props} />
                <FilmDetails data={Data.film[0]} />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    // title: state.searchFilm.title ? state.searchFilm.title : null
})

export default connect(mapStateToProps, { fetchFilm })(DetailPage)