import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Settings extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container">
                <h1>Settings page</h1>
            </div>
        )
    }
}
