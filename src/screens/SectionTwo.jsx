import React, { Component } from 'react';

export default class SectionTwo extends Component {
    render() {
        
        return <div className="section padding-top-bottom-big " id="concept">

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap text-center">
                            <div className="back-title" style={{"color":"white"}}>concept</div>
                            <h3 className="text-white">We are the only global<br />Decentralized Real Estate Organization.</h3>
                            <p className="">At Raven NFT, we are Striving to create the first Decentralized Real Estate Organization curated with the intent to own and operate on land, both commercial and Residential, purchased Throughout Arizona and Ultimately the entire United States. We aim to deliver unparalleled utility both metaversaly and in person. Ultimately, the end goal of Raven NFT and purpose for why we are doing what we are doing is to to build facilities across the United States dedicated to caring for, rehabilitating, and putting an end to homelessness.</p>
                        </div>
                    </div>
             
                    <div className="col-md-4">
                        <div className="concept-box">
                            <img className="mb-4" src="img/details1.svg" alt=""/>
                            <h5 className="text-white">Independent</h5>
                            <p className="text-grey">            After 30 days
                                on secondary marketplaces, we
                                will use 20% of the royalties
                                each month for 6 months to
                                buy up the lowest priced Raven Nft’s to burn.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <div className="concept-box">
                            <img className="mb-4" src="img/details2.svg" alt=""/>
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
                            <img className="mb-4" src="img/3.svg" alt=""/>
                            <h5 className="text-white">High Growth</h5>
                            <p className="text-grey">         Hold your Raven NFT for
                                at least 90 days and/or sell
                                above the mint price to receive
                                a free Raven NFT.</p>
                        </div>
                    </div>
                </div>
            </div>

            



        </div>
    }
}
