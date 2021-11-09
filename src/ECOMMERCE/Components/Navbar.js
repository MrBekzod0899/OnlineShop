import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import logo from '../images/logo.png'
import {FaBars} from 'react-icons/fa'
import './navbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap'

class Navbar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
      }
      toggle=()=> {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
   render(){
        return (
        
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href="#" className="logo"><img className="img-fluid" src={logo} alt="no photo"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/"><Link to="">Home</Link></NavLink>
                        </NavItem>
                        <NavItem><NavLink href="#"><Link>Bags</Link></NavLink></NavItem>
                        <NavItem><NavLink href="#"><Link>Sneakers</Link></NavLink></NavItem>
                        <NavItem><NavLink href="#"><Link>Belt</Link></NavLink></NavItem>
                        <NavItem><NavLink href="#"><Link>Contact</Link></NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            // <div className="navbar">
            //     <Container fluid={true}  >
            //         <Row>
            //             <div className="col-md-4">
            //                 <div className="logo img-fluid">
            //                     <img src={logo} alt="no photo"/>
            //                 </div>
            //             </div>
            //             {/* <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#myNavbar">
            //                 <FaBars/>
            //             </button> */}
            //             <div className="col-md-8" id="myNavbar">
            //                 <ul >
            //                     <li className="navbar-item">
            //                         <Link to="">Home</Link>
            //                     </li>
            //                     <li className="navbar-item"><Link>Bags</Link></li>
            //                     <li className="navbar-item"><Link>Sneakers</Link></li>
            //                     <li className="navbar-item"><Link>Belt</Link></li>
            //                     <li className="navbar-item"><Link>Contact</Link></li>
            //                 </ul>
            //             </div>
            //         </Row>
            //     </Container>
            // </div>
        )

}
}

export default Navbar2;