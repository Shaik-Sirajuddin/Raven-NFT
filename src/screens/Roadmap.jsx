import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Roadmap.css';
export default class Roadmap extends Component {
    render() {
        return <div className="section padding-top-bottom-big background-gradient-dark" id="roadmap">
			
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
