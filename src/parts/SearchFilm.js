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
                listOptionFilm: []
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

    searchFilm = () => {
        this.props.history.push("/detail-film/214792")
    }


    render() {
        const { data, listFilm } = this.props
        const { itemFilm } = this.state

        console.log(listFilm)

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
                                isDisabled={!data.title ? true : false}
                            >
                                Search
                            </Button>
                        </div>
                        {
                            itemFilm.display && 
                            
                                <div className="search-list-container mt-3 mx-auto">
                                    {itemFilm.listOptionFilm.length < 1 
                                        ?
                                            <div className="option py-4">
                                                <span className="w-100 text-center">
                                                    No Options Selected
                                                </span>
                                            </div>
                                        :
                                        <div className="option">
                                            <span className="w-100 text-center">
                                                Should Show Film List when User Write Text
                                            </span>
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