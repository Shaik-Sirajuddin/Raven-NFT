import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default class SectionTwo extends Component {
    render() {
        return <div className="section padding-top-bottom-big background-gradient-dark-re" id="concept">

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap text-center">
                            <div className="back-title">concept</div>
                            <h3 className="text-white">We are the only global<br />mining operation.</h3>
                            <p className="color-pr">Lend your digital assets to others for trading and earn an interest through margin trading loans.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="concept-box">
                            <img className="mb-4" src="img/details1.svg" alt="" />
                            <h5 className="text-white">Independent</h5>
                            <p className="text-grey">            After 30 days
                                on secondary marketplaces, we
                                will use 20% of the royalties
                                each month for 6 months to
                                buy up the lowest priced Cyber
                                Hero Nft’s to burn.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className="concept-box">
                            <img className="mb-4" src="img/details2.svg" alt="" />
                            <h5 className="text-white">Fully Scalable</h5>
                            <p className="text-grey">               Merchandise launch
                                (t-shirts, mugs and more)
                                first 200 pieces will be
                                discounted to 50% of cost for
                                NFT holders. All items available
                                at cost afterwards.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className="concept-box">
                            <img className="mb-4" src="img/3.svg" alt="" />
                            <h5 className="text-white">High Growth</h5>
                            <p className="text-grey">         Hold your cyber hero for
                                at least 90 days and/or sell
                                above the mint price to receive
                                a free Cyber Hero Seed NFT
                                (your hero’s baby picture).</p>
                        </div>
                    </div>
                    <div className="col-md-12 padding-top-bottom">
                        <div className="line-sep"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">Pre-sale</h4>
                        <p className="lead text-grey">Set-up and build our community
                            on Discord and Twitter. Build
                            website. Beta design of comic
                            book cover and NFT's. Release
                            lore and open whitelist (250
                            spots, max mint 3 per person
                            *subject to change).</p>
                            <Link to='/pre'> <a className="btn btn-primary mt-4 mx-0 js-tilt"
                            data-gal="m_PageScroll2id" data-ps2id-offset="68"
                            role="button" data-tilt-perspective="300" data-tilt-speed="700"
                            data-tilt-max="24"><span>Register Now</span></a></Link>
                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                        <Carousel
                            autoPlay={true}
                            centerMode={false}
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}>
                            <div>
                                <img src="./img1.png" />
                            </div>
                            <div>
                                <img src="./img2.png" />
                            </div>
                            <div>
                                <img src="./img3.png" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5"></div>
                </div>
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                        <Carousel
                            autoPlay={true}
                            centerMode={false}
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}>
                            <div>
                                <img src="./img1.png" />
                            </div>
                            <div>
                                <img src="./img2.png" />
                            </div>
                            <div>
                                <img src="./img3.png" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-md-6 offset-md-1 align-self-center">
                        <h4 className="text-white">Ready, Set, Go!</h4>
                        <p className="text-grey">
                            Close whitelist, finalize NFT design
                            for first collection. Set pre-sale mint
                            pricing (.88 SOL *subject to change)
                            and number of NFT's in the first
                            collection (1k *subject to change
                            @ .99 SOL *subject to change).
                            Launch pre-sale and minting on our
                            website on the Solana blockchain.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">50% Sold</h4>
                        <p className="lead text-grey">
                            Establish a community wallet,
                            NFT holders will vote on where
                            the charitable contributions will
                            go and lore direction.
                            Merchandise launch for NFT
                            holders at 50% of cost. Marketing
                            and social media push to sell-out
                            and help prepare for secondary
                            market launch.
                        </p>

                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                        <Carousel
                            autoPlay={true}
                            centerMode={false}
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}>
                            <div>
                                <img src="./img1.png" />
                            </div>
                            <div>
                                <img src="./img2.png" />
                            </div>
                            <div>
                                <img src="./img3.png" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                        <Carousel
                            autoPlay={true}
                            centerMode={false}
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}>
                            <div>
                                <img src="./img1.png" />
                            </div>
                            <div>
                                <img src="./img2.png" />
                            </div>
                            <div>
                                <img src="./img3.png" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-md-6 offset-md-1 align-self-center">
                        <h4 className="text-white">100% Sold</h4>
                        <p className="text-grey">
                            Create a community wallet to fund charitable donations, prizes, and
                            other perks. Perks activated:
                            buyback and burn, monthly prizes,
                            and charitable donations. Hold and
                            sell perk activated. Comic book
                            development begins. Launch on
                            secondary markets. One tree
                            planted for every NFT sold.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">Future Plans 2022-2023</h4>
                        <p className="lead text-grey">
                            Faction wars, browser based mini
                            game, short story/novella all
                            based on project lore. Planning
                            for new NFT collection (+15%
                            mint price). Also, community
                            input for future collections of
                            Galaxy Celestial's and Alien Villains.
                            All subsequent pre-sale availability
                            will be at a discount for current
                            NFT holders. All to be minted
                            on our website on the Solana
                            blockchain.
                        </p>
                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                        <Carousel
                            autoPlay={true}
                            centerMode={false}
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}>
                            <div>
                                <img src="./img1.png" />
                            </div>
                            <div>
                                <img src="./img2.png" />
                            </div>
                            <div>
                                <img src="./img3.png" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>



        </div>;
    }
}
