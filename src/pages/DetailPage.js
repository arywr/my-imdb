import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import PageDetailsTitle from 'parts/PageDetailsTitle'
import Data from 'json/getFilm'
import FilmDetails from 'parts/FilmDetails'

import { getFilm } from 'store/actions/searchFilm'
import Footer from 'parts/Footer'

class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
    }

    async componentDidMount() {
        document.title = "Film.co | Details"
        window.scrollTo(0,0)

        await this.props.getFilm(this.props.location.state.id, "DetailFilm")
        this.setState({isLoaded: true})
    }

    render() {
        const { page } = this.props

        return (
            <>
            {
                this.state.isLoaded 
                ?
                    <>
                        <Header {...this.props} />
                        <PageDetailsTitle data={page} />
                        <FilmDetails data={page} />
                        <Footer />
                    </> 
                : 
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <div className="spinner-border text-primary" role="status" style={{ width: "8rem", height: "8rem" }}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
            }
                
            </>
        )
    }
}

const mapStateToProps = state => ({
    page: state.searchFilm.DetailFilm
})

export default connect(mapStateToProps, { getFilm })(DetailPage)