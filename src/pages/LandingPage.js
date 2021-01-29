import React, { Component } from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import Footer from 'parts/Footer'
import Data from 'json/getFilm'
import { connect } from 'react-redux'
import { fetchFilm } from 'store/actions/searchFilm'
import SearchFilm from 'parts/SearchFilm'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                listFilm: [],
                title: "",
            }
        }
    }

    componentDidMount() {
        document.title = "Film.co | Home"
        window.scrollTo(0, 0)
    }

    onChange = event => {
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        }, () => {
            const state = this.state
            if(state.data.title !== "")
            this.props.fetchFilm(state.data.title, "listFilm")
        })
    }

    render() {
        const { data } = this.state
        const { page } = this.props

        return (
            <>
                <Header {...this.props} />
                <Hero {...this.props} />
                <SearchFilm data={data} onChange={this.onChange} listFilm={page} />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    page: state.searchFilm.listFilm ? state.searchFilm.listFilm : []
})

export default connect(mapStateToProps, { fetchFilm })(LandingPage)