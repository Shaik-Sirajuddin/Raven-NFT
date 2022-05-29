import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import './SectionOne.css'
export default class SectionOne extends Component {
    render() {
        return <div className="section full-height height-auto-lg hide-over bg-d">
            <div id='landPageFirst' className="hero-center-wrap relative-on-lg">
                <div className="container">
                    <div className="row">
                        <img id='landingImage' src="./images/ravenfront2.png" alt="" />
                    </div>
                    <div className="row">
                        <img id='platformImg' src="./images/Raven Your Platform.png" alt="" />
                    </div>
                </div>
            </div>


        </div>;
    }
}
