import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
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
                    <div className="col-md-12 padding-top-bottom">
                        <div className="line-sep"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                     <div className="col-md-12">
                        <div className="title-wrap text-center">
                            <div className="back-title" style={{"color":"white"}}>Roadmap</div>
                            <h3 className="text-white">What we are plannning to do.</h3>
                        </div>
                    </div>
                <div className="row">

                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">Ready, Set, Go - Mint!</h4>
                        <p className="lead text-grey">10% Holder’s Only Bluechip giveaway
30% Holder’s Only Bluechip giveaway <br/>
50% Holder’s Only Bluechip giveaway <br/>
70% Holder’s Only Bluechip giveaway (Mutant Ape Yacht Club) <br/>
90% Holder’s Only Bluechip giveaway (Bored Ape Yacht Club Giveaway)<br/>
100% Holder’s Only Bluechip giveaway (Crypto Punk Giveaway).</p>
                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                        <Carousel autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                               <div>
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                        <Carousel autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                                 <div>
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div>
                        </Carousel>
                    </div>
                    <div className="col-md-6 offset-md-1 align-self-center">
                        <h4 className="text-white">Post Mint</h4>
                        <p className="text-grey ul">
                           <ul >
                               <li>Build Out Team Of Accountants, Lawyers, Social Media Outreach and Marketing experts. Hire a Real Estate acquisition Team.</li>
                               <li>
                               Establish Open Accounting and Doxx Team Members in order to create a hierarchy of accountability.
                               </li>
                               <li>
                               Acquire our first large plot of land and build Arizona’s Largest Crypto Mine that will also double as Raven HQ.
                               </li>
                               <li>
                               Establish system that allows holders to access and work with our creative, marketing, accounting team for their own personal branding and business use. As well, Holders will have the opportunity to have their business idea be fully funded by Raven NFT (More Details to Come)

                               </li>
                               <li>Acquire First Private Property.</li>

                           </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">What more</h4>
                        <p className="lead text-grey ul">
                        <ul>
                               <li>
                               Establish Open Accounting and Doxx Team Members in order to create a hierarchy of accountability.
                               </li>
                               <li>
                               Acquire Virtual Property.
                               </li>
                               <li>
                               Acquire First Commercial Property.
                               </li>
                               <li>
                               Develop Model around renting out space in our virtual property. Create Value Proposition.
                               </li>
                               <li>
                               Continue Buying and renting out private and commercial properties until we are able to generate reliable and stable cash flow.
                               </li>
                           </ul>
                        </p>

                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                        <Carousel autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                        <div>
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                        <Carousel autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                                <div>
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div>
                        </Carousel>
                    </div>
                    <div className="col-md-6 offset-md-1 align-self-center">
                        <h4 className="text-white">More coming</h4>
                        <p className="text-grey ul">
                        <ul>
                               <li>
                               Begin paying Chairmen (Raven NFT Holders) residually for life.
                               </li>
                               <li>
                               Higher Tier Holders will recieve higher or more than lower tier but all will be taken care of. (For example, Tier 3 Holders may recieve $1,500 monthly for life or for as long as they are holding, Tier 2 holders may recieve $1000 and Tier 1 holders may receive $600) Specifics and payment amounts and quantities will be established as we grow closer to establishing that utility.

                               </li>
                               <li>
                               Vote as a community where to build and develop our Great Gatsby-esque mansion for weekly metaverse parties which will house activities and serve as collaboration and networking events with other notable NFT collections. These will be exclusive events and Raven Holders will Have Immediate Access.

                               </li>
                            
                               
                           </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">Future Plans</h4>
                        <p className="lead text-grey">
                        <ul>
                              <li>
                              First Real in person plot of land giveaway as well as first in person property giveaway.
                               </li>
                               <li>
                              
Extend model to another mint created with the intention to purchase land in another State in the United states.
                               </li>
                               <li>
                               Holders Will have whitelist access to additional Raven NFT mints.

                               </li>
                               <li>
                               Begin curating the model and begin establishing our facilities dedicated to caring for, rehabilitating, and putting an end to homelessness
                               </li>
                           </ul>
                        </p>
                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                        <Carousel autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                                <div>
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>



        </div>;
    }
}
