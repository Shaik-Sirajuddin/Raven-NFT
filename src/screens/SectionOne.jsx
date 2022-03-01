import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './SectionOne.css'
export default class SectionOne extends Component {
    render() {
        return <div className="section full-height height-auto-lg hide-over bg-d">
            <div className="hero-center-wrap relative-on-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left parallax-fade-top align-self-center z-bigger">
                            <h2 className="text-white">Join Us On Our <br /> ultimate goal to end homelessness</h2>
                            <p className="mt-3 mb-4 pb-3 font-weight-normal text-white">10000 Raven NFTS living on the Ethereum blockchain</p>
                           
                           
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0 rounded-500" >
                           
                        <Carousel 
                              className='my-3 mx-3'
                              autoPlay={false}
                              centerMode={false}
                              infiniteLoop={true}
                              interval={1500}
                              swipeable={false} 
                              showThumbs={false}
                              
                              showStatus={false} 
                              showArrows={false}>
                                <div className='image-logo'>
                                    <img className='rounded' src="./images/logo.png"/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
           

            
        </div>;
    }
}
