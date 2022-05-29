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
                        <p>DeFi and NFTs are redefining what it is to be a private corporation or organization in the United States. NFTs have opened up a gateway for private organizations to receive and operate with funding only seen before with major public companies without offering any equity in exchange for said funding. NFTs are the new shares and share price will be determined by the utility provided and the success of the host organization who deployed their NFT. In reference to Raven NFT, our "share price" will go up based on our ability to create value not only for the corporation itself but most importantly our holders. We offer a plethora of ways in which we are providing utility but most uniquely is our holder monthly payment plan. Our model extends for the duration our holders have our NFT in their wallet and allows us to give back and bring value to our community outside of the standard value creation model you see present in 99% of all NFTs on the market which typically involves waiting for the floor price to rise and often times floor price manipulation. Raven NFT is the long sought after solution and the solution is widely utilitarian. Additionally, we are offering holders a place on the forefront of one of the greatest humanitarian efforts of the latest generation. The sole purpose of this organization is to improve the lives of others and more specifically the homeless. Our full spectrum facilities will be located across the United States will change lives and enable those who need it a chance to grow and flourish</p> <img className='test' src="./images/aiden1.jpg"/>
                        <div id="image-caption"> - Aiden N. Bradley Founder of Raven NFT</div>
                    </div>
                </div>
            </div> 
        </div>
      </div>
     </div>
    }
}
