import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, Button, CardTitle, CardText, CardImg, InputGroup, InputGroupText ,Input} from 'reactstrap';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product6.jpg'
import product4 from '../images/product8.jpg'
import product5 from '../images/product3.jpg'
import {FaShippingFast} from 'react-icons/fa'
import {RiRefund2Line} from 'react-icons/ri'
import {SiNike,SiAdidas,SiPuma} from 'react-icons/si'

import {FcOnlineSupport} from 'react-icons/fc'


 const Section =()=> {
    const [value, setValue] = React.useState(2);
    const [value1, setValue1] = React.useState(2);
    const [value2, setValue2] = React.useState(2);
    const [value3, setValue3] = React.useState(2);
    const [value4, setValue4] = React.useState(2);
    const [value5, setValue5] = React.useState(2);
    const [value6, setValue6] = React.useState(2);
    const [value7, setValue7] = React.useState(2);
    const [value8, setValue8] = React.useState(2);
    const [value9, setValue9] = React.useState(2);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d=new Date();
        return ( 
        <div>
             <div className="main container-fluid mb-md-5 mb-sm-0">
                <div className="row mb-md-3 mb-sm-0">
                    <div className="col-lg-3 col-md-12">
                        <h6>FS-Quilted MAXI</h6>
                        <h6>Cros Bag</h6>
                        <img src={product1} />
                        <span className="price">$534,33</span>
                        <span className="text-danger">24%off</span>
                        <h6><sup>$</sup>299,43</h6>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <h6>FS-Quilted MAXI</h6>
                        <h6>Cros Bag</h6>
                        <img src={product2} />
                        <span className="price">$534,33</span>
                        <span className="text-danger">24%off</span>
                        <h6><sup>$</sup>299,43</h6>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <h6>FS-Quilted MAXI</h6>
                        <h6>Cros Bag</h6>
                        <img src={product3} />
                        <span className="price">$534,33</span>
                        <span className="text-danger">24%off</span>
                        <h6><sup>$</sup>299,43</h6>
                    </div>
                 </div>
                 
            </div>
            <div className="container mt-5 best-seller">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                        <h4>Best Seller</h4>
                        <ul>
                            <li className="active bg-primary">
                                <a href="#" >All</a>
                            </li>
                            <li>
                                <a href="#">Bags</a>
                            </li>
                            <li>
                                <a href="#">Sneakers</a>
                            </li>
                            <li>
                                <a href="#">Belt</a>
                            </li>
                            <li>
                                <a href="#">Sunglasses</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value4}
                            onChange={(event, newValue) => {
                            setValue4(newValue);
                            }}
                        />
                        </CardText>
                        <CardText className="text">
                            <span className="pl-2">$299,43</span>
                            <span className="">$534,33</span>
                            <span className="text-danger">24%off</span>
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value5}
                            onChange={(event, newValue) => {
                            setValue5(newValue);
                            }}
                        />
                        </CardText>
                        <CardText className="text">
                            <span className="pl-2">$299,43</span>
                            <span className="">$534,33</span>
                            <span className="text-danger">24%off</span>
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value6}
                            onChange={(event, newValue) => {
                            setValue6(newValue);
                            }}
                        />
                        </CardText>
                        <CardText className="text">
                            <span className="pl-2">$299,43</span>
                            <span className="">$534,33</span>
                            <span className="text-danger">24%off</span>
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value7}
                            onChange={(event, newValue) => {
                            setValue7(newValue);
                            }}
                        />
                        </CardText>
                        <div className="card-text text">
                            <span >$299,43</span>
                            <span>$534,33</span>
                            <span className="text-danger">24%off</span>
                        </div>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                   <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                        </CardText>
                        <CardText className="text">
                            <span className="pl-2">$299,43</span>
                            <span className="">$534,33</span>
                            <span className="text-danger">24%off</span>
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value1}
                            onChange={(event, newValue) => {
                            setValue1(newValue);
                            }}
                        />
                        </CardText>
                        <CardText className="text">
                            <span className="pl-2">$299,43</span>
                            <span className="">$534,33</span>
                            <span className="text-danger">24%off</span>
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value2}
                            onChange={(event, newValue) => {
                            setValue2(newValue);
                            }}
                        />
                        </CardText>
                        <CardText className="text">
                            <span className="pl-2">$299,43</span>
                            <span className="">$534,33</span>
                            <span className="text-danger">24%off</span>
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <Card>
                        <CardImg top width="100%" src={product1} alt="Card Shoes" />
                        <CardBody>
                        <CardTitle tag="h6">Nike Air Max 270 React</CardTitle>
                        <CardText>
                        <Rating
                            name="simple-controlled"
                            value={value3}
                            onChange={(event, newValue) => {
                            setValue3(newValue);
                            }}
                        />
                        </CardText>
                        <CardText className="text">
                            <span className="pl-2">$299,43</span>
                            <span className="">$534,33</span>
                            <span className="text-danger">24%off</span>
                        </CardText>
                        </CardBody>
                    </Card>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                           <h4><a style={{boxSizing:'border-box',paddingBottom:'4px',textDecoration:'none',borderBottom:'2px solid #40bbff',color:'#40bbff'}} href="#">Load more</a></h4> 
                    </div>
                </div>
            </div>
            <div className="shop_now container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-sm-2 col-12">
                            <h4>Adidas Men Running</h4>
                            <h4>Sneakers</h4>
                            <p>Performance and design,Taken right to the edge</p>
                            <p><a href="#">Shop Now</a></p>
                    </div>
                    <div className="col-lg-6 col-md-8  col-sm-10 col-12 img-fluid ">
                            <CardImg src={product4} alt="No photo" />
                    </div>
                </div>
            </div>
            <div className="container-fluid entertainment pt-5">
                    <div className="row ">
                         <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <FaShippingFast className="text-danger"/>
                            <br/>
                            <h4>Free shipping</h4>
                            <p>Lorem  atque consectetur. Nemo obcaecati accusamus cumque ex eaque dolorem atque explicabo inventore mollitia deleniti, ea deserunt in, saepe debitis necessitatibus laboriosam cum.</p>
                        </div>
                         <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <RiRefund2Line className="text-danger"/>
                            <br/>
                            <h4>Refund</h4>
                            <p>Lorem  atque consectetur. Nemo obcaecati accusamus cumque ex eaque dolorem atque explicabo inventore mollitia deleniti, ea deserunt in, saepe debitis necessitatibus laboriosam cum.</p>
                        </div>
                         <div className=" col-lg-4 col-md-4 col-sm-12 col-12">
                            <FcOnlineSupport className="text-danger"/>
                            <br/>
                            <h4>Support 24/7</h4>
                            <p>Lorem  atque consectetur. Nemo obcaecati accusamus cumque ex eaque dolorem atque explicabo inventore mollitia deleniti, ea deserunt in, saepe debitis necessitatibus laboriosam cum.</p>
                        </div>
                   
                    </div>
                    <div className="row mt-5 mb-5 text-center">
                            <h1>
                                Latest News
                            </h1>
                    </div>
                    <div className="row mb-4 pb-4  latestNews">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="left">
                            <SiNike/>
                            </div>
                            <div className="right">
                                <span> {d.getDay()} ,{months[d.getMonth()].substr(0,3)}, {d.getFullYear()} </span>
                                <h6>Fashion Industry</h6>
                            <p>Lorem  in, saepe debitis necessitatibus laboriosam cum. Lorem  in, saepe debitis necessitatibus laboriosam cum Lorem  in, saepe debitis necessitatibus laboriosam cum</p>
                            </div>  
                         </div>  
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="left">
                            <SiAdidas/>
                            </div>
                            <div className="right">
                                <span> {d.getDay()} ,{months[d.getMonth()].substr(0,3)}, {d.getFullYear()} </span>
                                <h6>Fashion Industry</h6>
                            <p>Lorem  in, saepe debitis necessitatibus laboriosam cum.</p>
                            </div>  
                         </div>  
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="left">
                            <SiPuma/>
                            </div>
                            <div className="right">
                                <span> {d.getDay()} ,{months[d.getMonth()].substr(0,3)}, {d.getFullYear()} </span>
                                <h6>Fashion Industry</h6>
                            <p>Lorem  in, saepe debitis necessitatibus laboriosam cum.</p>
                            </div>  
                         </div>  
                    </div>  
                    <div className="row mt-5 mb-5 mt-sm-2 mb-sm-2 text-center">
                            <h1>
                                Future Products
                            </h1>
                    </div>
                    <div className="row mb-4 pb-4 futureProducts latestNews ">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 pt-sm-3 pt-2">
                            <div className="left ">
                                <img src={product5} className="img-fluid"/>
                            </div>
                            <div className="right text-sm-center ">
                                <h5>Blue Swade Nike</h5>
                                <h5>Sneakers</h5> 
                                <span className="text-danger">$499</span><span className="text-secondary text-decoration-line-through">$599</span>
                            </div>  
                         </div>  
                        <div className="col-md-4 col-sm-12 col-12 pt-sm-2 pt-2">
                        <div className="left">
                                <img src={product5} className="img-fluid"/>
                            </div>
                            <div className="right text-sm-center">
                            <h5>Blue Swade Nike</h5>
                                <h5>Sneakers</h5> 
                                <span className="text-danger">$499</span><span className="text-secondary text-decoration-line-through">$599</span>
                            </div> 
                         </div>  
                        <div className="col-md-4 col-sm-12 col-12 pt-sm-2 pt-2">
                            <div className="left">
                                <img src={product5} className="img-fluid"/>
                            </div>
                            <div className="right text-sm-center">
                            <h5>Blue Swade Nike</h5>
                                <h5>Sneakers</h5> 
                                <span className="text-danger">$499</span><span className="text-secondary text-decoration-line-through">$599</span>
                            </div>  
                         </div>  
                    </div>  
                    <div className="row mt-5 pb-5">
                       <div className="col-md-6 offset-md-3 col-sm-12">
                                <InputGroup style={{width:'100%'}} >
                                    <Input type="text" id="" name="" placeholder="search" /> 
                                    <InputGroupText className="bg-primary">Search</InputGroupText>
                                </InputGroup>
                        </div>
                    </div>
            </div>     
            </div>
        )
 }
 export default Section