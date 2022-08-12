import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
export default class SectionOne extends Component {
    render() {
        return <div className="section full-height height-auto-lg hide-over background-dark-blue-3">
            <div className="hero-center-wrap relative-on-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left align-self-center z-bigger">
                            <h2 className="text-white">Join Us On Our <br />Sci-Fi Adventure!</h2>
                            <p className="mt-3 mb-4 pb-3 font-weight-normal text-white">1500 Cyber Heros living on the Solana blockchain</p>
                           
                            <span>
                                <h6 style={{ 'display': 'inline', 'color': 'orange' }}>Want to get on the Whitelist for our Pre-Sale pricing?</h6>
                                <Link to='/pre'><a className="btn btn-primary js-tilt" href="#app" role="button" data-tilt-perspective="300" data-tilt-speed="700" data-tilt-max="24"><span>Pre-Sale</span></a></Link></span>
                            <p className="text-left text-white mb-0"><small></small></p>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0 rounded-500">
                           
                        <Carousel className='my-3 mx-3' autoPlay={false} centerMode={false} infiniteLoop={false} interval={2000} swipeable={false} showThumbs={false} showStatus={false} showArrows={false}>
                                <div>
                                    <img className='rounded' src="./images/gif.gif"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/gif.gif"/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
           

            
        </div>;
    }
}
