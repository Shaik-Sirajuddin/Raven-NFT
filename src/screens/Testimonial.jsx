import React, { Component } from 'react';

export default class Testimonial extends Component {
    render() {
       
        return <div className="section padding-top-bottom-big  bg-d">
         <div class="container" >
         <div className="col-md-12">
                        <div className="title-wrap text-center">
                            <div className="back-title" style={{"color":"white"}}>Testimonial</div>
                            <h3 className="text-white">Hear from the founder.</h3>
                        </div>
                    </div>
        <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="carousel-caption">
                        <p>DeFi and NFTs have created a unique opportunity to implement a sustainable solution to an unfortunately common welfare issue. That issue being homelessness. The Raven NFT model for solving this issue centers around Real Estate where we plan to invest and control multi-family homes such as apartment complexes, quadplexes, triplexes, etc… This will give us the foothold and desired consistency in revenue to begin building our full-spectrum care facilities which will be located across the nation and will be designed to encompass any and all needs our residents will have. Additionally, we are here to be the light in the darkness that is the NFT market as of late. We aim to deliver a reliable and solid investment opportunity for our holders by providing unparalleled value and utility..We offer a plethora of ways in which we are providing these items but most uniquely, is our holder monthly payment plan, which extends for the duration our holders have our Raven Tokens in their wallet, and the uninhibited access to our financial, legal, IP, and marketing teams for our holders personal use. Raven NFT is the long sought-after solution and the solution is widely utilitarian. We are offering holders a place at the forefront of one of the greatest humanitarian efforts of the latest generation and the time to make an impact is right now. Again, It is our responsibility and sworn duty of this organization to improve the lives of others and more specifically the homeless.</p> <img className='test' src="./images/aiden1.jpg"/>
                        <div id="image-caption"> - Aiden N. Bradley Founder of Raven NFT</div>
                    </div>
                </div>
            </div> 
        </div>
      </div>
     </div>
    }
}
