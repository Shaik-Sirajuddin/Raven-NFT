import React, { Component } from 'react';

export default class Perks extends Component {
    render() {
        return <div className="section padding-top-bottom-big" id="roadmap">
            <div className="background-parallax" style={{
                backgroundImage: "url('img/parallax-dark.jpg')"
            }} data-enllax-ratio=".5" data-enllax-type="background" data-enllax-direction="vertical"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap text-center">
                            <div className="back-title">roadmap</div>
                            <h3 className="text-white">Making the most<br />out of unused.</h3>
                            <p className="color-pr">The Coeus token sale events are unique as they offer tiered bonuses which include increasing token price and lifetime discounts.</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="customNavigation">
                            <a className="prev-roadmap dark"><i className="fa fa-angle-left"></i></a>
                            <a className="next-roadmap dark"><i className="fa fa-angle-right"></i></a>
                        </div>
                        <div id="owl-roadmap" className="owl-carousel owl-theme">
                            <div className="item dark">
                                <div className="roadmap-box background-dark-blue-2">
                                    
                                    <p className="text-grey">
                                    <h6 className='text-grey'>Pre-Sale</h6>
                                    Set-up and build our community on Discord and Twitter. Build website. Beta design of comic book cover and NFT's. Release lore and open whitelist (250 spots, max mint 3 per person *subject to change).
                                    </p>
                                </div>
                            </div>
                             <div className="item dark">
                                <div className="roadmap-box background-dark-blue-2">
                                <h6 className='text-grey'>Ready,set,Go</h6>
                                   <p className="text-grey">
                                      Close whitelist, finalize NFT design for first collection. Set pre-sale mint pricing (.88 SOL *subject to change) and number of NFT's in the first collection (1k *subject to change @ .99 SOL *subject to change). Launch pre-sale and minting on our website on the Solana blockchain.
                                    </p>
                                </div>
                            </div>
                            <div className="item dark">
                                <div className="roadmap-box background-dark-blue-2">
                                <h6 className='text-grey'>50% Sold</h6>
                                    <p className="text-grey">
                                        Establish a community wallet, NFT holders will vote on where the charitable contributions will go and lore direction. Merchandise launch for NFT holders at 50% of cost. Marketing and social media push to sell-out and help prepare for secondary market launch.
                                    </p>
                                </div>
                            </div>

                            <div className="item dark">
                                <div className="roadmap-box background-dark-blue-2">
                                <h6 className='text-grey'>100% Sold</h6>
                                    <p className="text-grey">
                                    Create a community wallet to fund charitable donations, prizes, and other perks. Perks activated: buyback and burn, monthly prizes, and charitable donations. Hold and sell perk activated. Comic book development begins. Launch on secondary markets. One tree planted for every NFT sold.
                                    </p>
                                </div>
                            </div>

                            <div className="item dark">
                                <div className="roadmap-box background-dark-blue-2">
                                <h6 className='text-grey'>Future Plans 2022-2023</h6>
                                    <p className="text-grey">
                                    Faction wars, browser based mini game, short story/novella all based on project lore. Planning for new NFT collection (+15% mint price). Also, community input for future collections of Galaxy Celestial's and Alien Villains. All subsequent pre-sale availability will be at a discount for current NFT holders. All to be minted on our website on the Solana blockchain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>;
    }
}
