import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import './employee.css'
import data from '../app.json'

export default class Employee extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
 componentDidMount(){

    
     console.log("component did mount");
     axios.get({data})
     .then((response)=>{
         this.setState({
             users:response.data
         });
         console.log(response)
     })
     .catch((errors)=>{
        console.log(errors)
     })
 }
    render() {
        let userList=data;
        return (
            <div className="container-fluid">
               <div className="row">
                {
                     data.map((item)=>(
                         <div className="col-md-3">
                             <div className="card mt-3">
                                    <div className="card-header">
                                        <h5>{item.name}</h5>
                                    </div>
                                    <div className="card-body">
                                       <img className="img-fluid circle-rounded" src={item.url} alt="" />
                                    </div>
                                    <div className="card-footer">
                                        <p>username:{item.username}</p>
                                        <p>email:{item.email}</p>
                                        <p>company:{item.company.name}</p>
                                        <p>adress:{item.address.city},{item.address.street}{item.address.suite} </p>
                                        
                                    </div>
                             </div>
                         </div>
                     ))
                }
               </div>
            </div>
        )
    }
}
