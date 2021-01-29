import React from 'react'
import propTypes from 'prop-types'
import './index.scss'
import { Search } from 'react-feather'

export default function Text(props) {
    const {
        type,
        value,
        placeholder,
        name,
        outerClassName,
    } = props
    
    const onChange = event => {
        const target = {
            target: {
                name: name,
                value: event.target.value
            }
        }
        props.onChange(target)
    }

    return (
        <div className="input-text">
            <div className={`input-group ${outerClassName}`}>
                <input
                    name={name}
                    type={type}
                    className="form-control"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    style={props.style}
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
}

Text.defaultProps = {
    type: "text",
    placeholder: "Please type here...",
}

Text.propTypes = {
    name: propTypes.string,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    onChange: propTypes.func,
    type: propTypes.string,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}


