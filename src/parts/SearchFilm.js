import React, { Component } from 'react'
import InputText from 'components/Forms/InputText'
import Fade from 'react-reveal/Fade'
import Button from 'components/Button'
import { withRouter } from 'react-router-dom'

class SearchFilm extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemFilm: {
                display: false,
                title: this.props.data.title,
                id: "",
            }
        }
    }

    setDisplay = display => {
        this.setState({
            ...this.state,
            itemFilm: {
                ...this.state.itemFilm,
                display: !display,
            }
        })
    }

    setValue = (id, title) => {
        this.setState({
            ...this.state,
            itemFilm: {
                ...this.state.itemFilm,
                display: false,
                title: title,
                id: id
            }
        })
        const { data } = this.props
        data.title = title
    }

    searchFilm = () => {
        const { id } = this.state.itemFilm
        this.props.history.push({
            pathname: `/detail-film/${id}`,
            state: { id: id }
        })
    }

    render() {
        const { data, listFilm } = this.props
        const { itemFilm } = this.state

        return (
            <Fade bottom delay={800}>
                <section className="section-search-film container">
                    <div className="hero-search-box">
                        <div className="search-box mx-auto">
                            <label htmlFor="title" />
                            <InputText 
                                id="title"
                                name="title"
                                type="text"
                                onChange={this.props.onChange}
                                value={data.title}
                                onClick={() => this.setDisplay(itemFilm.display)}
                                outerClassName="w-100 h-100"
                                style={{
                                    width: "100%",
                                    height: "100%"
                                }}
                                placeholder="Search film here..."
                            />
                            <Button 
                                isPrimary 
                                className="btn-search px-4" 
                                onClick={this.searchFilm}
                                isDisabled={!itemFilm.id ? true : false}
                            >
                                Search
                            </Button>
                        </div>
                        {
                            itemFilm.display &&
                                <div className="search-list-container mt-3 mx-auto">
                                    {listFilm.length < 1 || data.title === ""
                                        ?
                                            <div className="option py-4">
                                                <span className="d-block text-center">
                                                    No Options Selected
                                                </span>
                                            </div>
                                        :
                                        <div className="option">
                                            {listFilm.map((items, index) => {
                                                return (
                                                    <div className="option-film-item d-block p-2" 
                                                        key={index}
                                                        onClick={() => this.setValue(items.id, items.title)}
                                                    >
                                                        <img src={items.image} alt={items.title} />
                                                        <span className="ml-2">{items.title}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                        }
                    </div>
                </section>
            </Fade>
        )
    }
}

export default withRouter(SearchFilm)