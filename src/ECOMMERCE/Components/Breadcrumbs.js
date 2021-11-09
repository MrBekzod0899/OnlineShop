import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Breadcrumbs extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className=" breadcrumbs container-fluid">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 col-12 offset-md-5 ">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                        <BreadcrumbItem active>Data</BreadcrumbItem>
                    </Breadcrumb>
                    </div>
                </div>
               
            </div>
        )
    }
}
