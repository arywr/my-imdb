import React from 'react'
import Button from 'components/Button'
import NavbarBrand from 'parts/IconText'

export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? "active" : "";
    }


    return (
        <div>
            <header className="spacing-sm container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <NavbarBrand />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/browse-film")}`}>
                                <Button className="nav-link" type="link" href="#">
                                    Browse Film
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}