import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyCourses extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="container">
                <h1>My Cource page</h1>
            </div>
        )
    }
}
