import React from 'react'
import BrandIcon from 'parts/IconText'

export default function Footer() {
    return (
        <footer className="section-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="footer-wrapper text-center">
                            <span>
                                {`Copyright 2019 • All rights reserved • `}
                                <BrandIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
