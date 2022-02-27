import React, { Component } from 'react';
export default class Rarity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        };
        //hideCanvas();
    }
    handleclick(lid) {
        console.log("check", lid);
    }
    render() {
        return <div class="section padding-top-bottom-big background-gradient-dark" id="rarity">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title-wrap text-center">
                            <div class="back-title">Rarity Checker</div>
                            <h3 class="text-white">Rarity Checker</h3>
                            <p class="color-pr">150 unique Heroes flying around the Solana blockchain</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">

                    <div className='col-md-3'></div>
                    <div class="col-md-6 align-self-center">
                        <h4 class="text-white">Determine the rairty of your Hero</h4>
                        <p class="lead text-grey">Enter your  Heroe's ID number:</p> <div className="suscribe">
                            <input className="form-control text-left" placeholder="Enter ID" type="number" name="mint" onChange={(e) => {
                this.setState({ id: e.target.value });
            }}/>
                            <button type="submit" className="btn btn-primary m-0 js-tilt" data-tilt-perspective="300" data-tilt-speed="700" data-tilt-max="24" onClick={() => { this.handleclick(this.state.id); }}><span>Check</span></button></div>
                        {/* <ul class="app-list mb-5 mt-4">
            <li class="text-grey">join our whitelist and discord for discounted pre-sale prices (max 3 per wallet)</li>
            <li class="text-grey">vote on important community decisions including lore</li>
            <li class="text-grey">win free NFT’s by participating and helping grow our community.</li>
            <li class="text-grey">20% of the royalties collected will go back to our supporters and NFT holders in the form of monthly prizes.</li>
            <li class="text-grey">5% of the royalties collected will be donated to charity as decided by nft holders</li>
            <li class="text-grey">After 30 days on secondary marketplaces, we will use 20% of the royalties each month for 6 months to buy up the lowest priced Cyber Hero Nft’s to burn.</li>
            <li class="text-grey">Hold your cyber hero for at least 90 days and/or sell above the mint price to receive a free Cyber Hero Seed NFT (your hero’s baby picture).</li>
            <li class="text-grey">Merchandise launch (t-shirts, mugs and more) first 200 pieces will be discounted to 50% of cost for NFT holders. All items available at cost afterwards.</li>
            <li class="text-grey">Comic book development, one page per month after secondary market release.</li>
            <li class="text-grey">Win printed copies of our comic book once completed</li>
            <li class="text-grey">Short story or Novella based on our lore</li>
            <li class="text-grey">Faction wars to be announced</li>
            <li class="text-grey">Get pre-sale pricing on new collection releases.</li>
        </ul> */}
                        {/* <a class="btn btn-primary mx-0 js-tilt" href="#" role="button" data-tilt-perspective="300" data-tilt-speed="700" data-tilt-max="24"><span>Download App</span></a>
        <a class="app-btn ml-4" href="#"><i class="fa fa-apple"></i></a>
        <a class="app-btn ml-2" href="#"><i class="fa fa-android"></i></a>
        <a class="app-btn ml-2" href="#"><i class="fa fa-windows"></i></a> */}
                    </div>
                    <div className='col-md-3'></div>

                </div>

                {/* <div class="col-md-12 padding-top">
                <div class="title-wrap text-center">
                    <h5 class="text-white">How it works:</h5>
                </div>
            </div>
            <div class="col-md-8 offset-md-2">
                <div class="video-section video-shadow">
                    <video width="100%" height="100%" autoplay>
                        <source src="./img/video.mov" />
                    </video>
                </div>
            </div> */}
            </div>


        </div>;
    }
}
