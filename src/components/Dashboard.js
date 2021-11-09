import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container">
                <h1>Dashboard page hello everyone</h1>
            </div>
        )
    }
}
