import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'


export default class Navigation extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
                <div className="container-fluid mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    Bootstrap
                                </div>
                                <div className="card-body">
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus nulla velit quidem voluptate dicta fuga, cumque assumenda at?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container fluid={true}>
                    <Row>
                        <Col md={4} className="mt-3 mb-2">
                            <Card>
                                <CardHeader>
                                    Reactstrap
                                </CardHeader>
                                <CardBody>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus nulla velit quidem voluptate dicta fuga, cumque assumenda at?
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </> 
        )
    }
}
