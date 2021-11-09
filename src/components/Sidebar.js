import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './../images/img_422593.png'
import logoheader from './../images/pdpuz-logo.svg'
import { Link,BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
// import { BiExit } from "react-icons/bi";
import { MdDashboard,MdViewList,MdDevices,MdPowerSettingsNew ,MdSettings,MdCardGiftcard,MdEventAvailable,MdOutlinePayment} from "react-icons/md";

import Dashboard from './Dashboard';
import MyCourses from './MyCourses'
import Events from './Events'
import Devices from './Devices'
import Payments from './Payments'
import AllCources from './AllCources'
import Settings from './Settings'
import Sertificates from './Sertificates'


export default class Sidebar extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(){
        super();
        this.state={
            isOpen:true
        }
    }

    render() {

        const {isOpen}=this.state;
        const openMenu=()=>{
            this.setState({
                isOpen:!isOpen
            })
        }
        return (
            <div>
                <Router>
                 <div className="Sidebar">
                        <div className={ isOpen ? "left-site openNav" :"left-site closeNav" } >
                        <img src={logoheader} className="p-5 pt-3" />
                        <ul>
                            <li>   <MdDashboard/>
                                    <Link to="/">Dashboard</Link>
                            </li>
                            <li> 
                                    <MdViewList/>
                                    <Link to="/my-cource">My cource</Link>
                            </li>
                            <li> <MdViewList/>
                                    <Link to="/all-cources">All cources</Link>
                            </li>
                            <li> <MdCardGiftcard/>
                                    <Link to="/sertificate">Sertificate</Link>
                            </li>
                            <li> <MdOutlinePayment/>
                                    <Link to="/Payments">Payments</Link>
                            </li>
                            <li>    <MdDevices/>
                                    <Link to="/devices">Devices</Link>
                            </li>
                            <li>     <MdEventAvailable/>
                                    <Link to="/events">Events</Link>
                            </li>
                            <li>    <MdSettings/>
                                    <Link to="/settings">Settings</Link>
                            </li>
                            <li>    <MdEventAvailable/>
                                    <Link to="/Home">Home PDP.uz</Link>
                            </li>
                            <li> 
                                    <MdPowerSettingsNew/>
                                    <Link to="/log-out"> chiqish</Link>
                            </li>

                        </ul>
                        </div>
                        <div className={isOpen ? "right-site closeMenu" :"right-site openMenu"}>
                            <nav>
                                <div onClick={openMenu} className="logo">
                                    <img src={logo} alt="no photo"/>
                                </div>
                            </nav>
                            <Switch>
                                <Route path="/" exact>
                                        <Dashboard/>
                                </Route>
                                <Route path="/my-cource">
                                        <MyCourses/>
                                </Route>
                                <Route path="/all-cources">
                                       <AllCources/>
                                </Route>
                                <Route path="/sertificate">
                                       <Sertificates/>
                                </Route>
                                <Route path="/payments">
                                        <Payments/>
                                </Route>
                                <Route path="/devices">
                                        <Devices/>
                                </Route>
                                <Route path="/events">
                                        <Events/>
                                </Route>
                                <Route path="/settings">
                                        <Settings/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
