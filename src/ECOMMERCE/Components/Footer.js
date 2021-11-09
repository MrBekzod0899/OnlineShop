import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap'
import logo from '../images/logo.png'
export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Container fluid={true} className="footer">
                    <Row>
                       <div className="col-md-2 offset-md-1 col-sm-12 col-12 pb-sm-4 pb-4 text-lg-start">
                       <img  src={logo} className="img-fluid"/>
                       <p>Lorem  in, saepe debitis  necessitatibus laboriosam cum.</p>
                       </div>
                       <div className="col-md-2 offset-md-2 col-sm-12 col-12 pb-sm-4 pb-4">
                       <h4>Follow us</h4>
                       <p>Lorem  in, saepe debitis necessitatibus laboriosam cum.</p>
                       </div>
                       <div className="col-md-2 offset-md-1 col-sm-12 col-12">
                       <h4>Contact us</h4>
                       <p>Lorem   necessitatibus laboriosam cum.</p>
                       </div>
                    </Row>

                     <Row className="pt-5">
                       <div className="col-md-2 col-sm-6  col-12  offset-md-1 pr-2 pb-3 ">
                        <h4>Information</h4>
                       <p >About us</p>
                       <p>Information</p>
                       <p>Privacy & Policy</p>
                       <p>Terms & Conditions</p>
                       </div>
                       <div className="col-md-2 col-sm-6 col-12  offset-md-1 pr-2 pb-3">
                       <h4>Service</h4>
                       <p>About us</p>
                       <p>Information</p>
                       <p>Privacy & Policy</p>
                       <p>Terms & Conditions</p>
                       </div>
                       <div className="col-md-2 col-sm-6 col-12  offset-md-1 pr-2">
                       <h4>My account</h4>
                       <p>About us</p>
                       <p>Information</p>
                       <p>Privacy & Policy</p>
                       <p>Terms & Conditions</p>
                       </div>
                       <div className="col-md-2 col-sm-6 col-12 offset-md-1 pr-2">
                       <h4>Our Office</h4>
                       <p>About us</p>
                       <p>Information</p>
                       <p>Privacy & Policy</p>
                       <p>Terms & Conditions</p>
                       </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
