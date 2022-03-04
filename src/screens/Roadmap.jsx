import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Roadmap.css';
export default class Roadmap extends Component {
    

    render() {
        let caroselStyle = {
            position: "relative",
            top: "50%" ,
            transform:" translateY(-50%)",
            margin: "auto"
            };
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
                        <p className="lead text-grey">
                        Every Landmark 10% that is minted during our minting phase of operation Raven NFT will be hosting a giveaway. We will be giving away Bluechip NFT projects such as Azuki, World of Women, Invisible friends, or whatever is that is trending at the time we reach these milestones. When we reach our final 30% we will be giving away a Mutant Ape Yacht Club, A Bored Ape Yacht Club, and a Crypto Punk.
                        
<ul>
<li>10% Minted - Bluechip NFT Giveaway</li>

<li>20% Minted - Bluechip NFT Giveaway</li>

<li>30% Minted - Bluechip NFT Giveaway</li>

<li>40% Minted - Bluechip NFT Giveaway</li>

<li>50% Minted - Bluechip NFT Giveaway</li>

<li>60% Minted - Bluechip NFT Giveaway</li>

<li>70% Minted - Bluechip NFT Giveaway</li>

<li>80% Minted - Mutant Ape Yacht Club Giveaway</li>

<li>90% Minted - Bored Ape Yacht Club Giveaway</li>

<li>100% Minted - Crypto Punk Giveaway</li>
</ul>
                        </p>
                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                        <div style={caroselStyle}>
                        <Carousel
                        autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                               <div> 
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
{/*                                
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div> */}
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                    <div style={caroselStyle}>
                        <Carousel
                        autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                               {/* <div> 
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                                */}
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                {/* <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div> */}
                        </Carousel>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-1 align-self-center">
                        <h4 className="text-white">Giveaways </h4>
                        <p className="text-grey ul">
                           <ul >
                               <li>A week after mint out and our final giveaway, we will begin doing weekly Bluechip NFT giveaways which will consist of the aforementioned titles or the projects that are trending at the time of giveaway. Every 5th Giveaway will be a prized NFT giveaway such as a Bored Ape Yacht Club or something of equal stature and reputation.</li>
                               <li>
                               55% of all secondary sales will go back into making sure that this giveaway model is sustainable as well as achievable.
                               </li>
                               <li>
                               30% of all secondary sales will be sent to a community wallet where Raven NFT holders will decide which virtual land shall be purchased and also what the utility of that land should be.

                               </li>
                               <li>
                               15% and the remainder of secondary sales will go back into Raven NFT where our team will likely decide where it shall be best put to use.

                               </li>
                            

                           </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">Post Mint Plan</h4>
                        <p className="lead text-grey ul">
                            <ul>
                        <li>Build Out Team Of Accountants, IP and Financial Lawyers, Social Media, marketing, and real estate acquisition experts.</li>

                        <li>Establish Open Accounting and Doxx Team Members in order to create a hierarchy of accountability</li>

                        <li>Weekly Bluechip NFT Giveaways begin</li>

                        <li>Acquire our first large plot of land and build Arizona’s Largest Crypto Mine that will also double as Raven HQ</li>
                        
                        <li>Establish a system that allows holders to access and work alongside our creative, marketing, accounting, and patent teams for their own personal and business use.</li>

                      
</ul>
                        </p>

                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                    <div style={caroselStyle}>
                        <Carousel
                        autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                               {/* <div> 
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div> */}
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                    <div style={caroselStyle}>
                        <Carousel
                        autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                               <div> 
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                {/* <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div> */}
                        </Carousel>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-1 align-self-center">
                        <h4 className="text-white">What more</h4>
                        <p className="text-grey ul" >
                        <ul>
                        <li>Acquire First Private Property</li>

<li>Acquire First Virtual Property</li>

<li>Acquire First Commercial Property</li>
                               <li>
                               The community Has established and voted on the business idea that Raven NFT will be fully funding and bringing to life.
                               </li>
                               <li>
                               Develop a Model around renting out space in our virtual property. Raven Holders will vote on the utility of this virtual land.
                               </li>
                               <li>
                               Continue Buying and renting out private and commercial properties until we are able to generate reliable, stable, and consistent revenue.
                               </li>
                           </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">More coming</h4>
                        <p className="lead text-grey">
                        <ul>
                               <li>
                               Begin paying Raven NFT Holders residually for life.
                               </li>
                               <li>
                               Develop a Great Gatsby-esque mansion for weekly metaverse parties which will house activities and serve as collaboration and networking events with other notable NFT collections. These will be exclusive events and Raven Holders will Have Immediate Access.
                               </li>
                               <li>
                               Re-Open Minting until we have had a mint for all 50 States. Raven holders will have early and discounted access to these mints. Additionally, their residual income payments will scale with each and every token held.


                               </li>
                            
                               
                           </ul>
                        </p>
                    </div>

                    <div className="col-md-5 offset-md-1 order-first order-md-last mb-4 mb-md-0">
                    <div style={caroselStyle}>
                        <Carousel
                        autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                               {/* <div> 
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                                */}
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div>
                                {/* <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div> */}
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                    <div style={caroselStyle}>
                        <Carousel
                        autoPlay={true} centerMode={false} infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
                               {/* <div> 
                                    <img className='rounded' src="./images/tier1.png"/>
                                </div>
                               
                                <div>
                                    <img className='rounded' src="./images/tier2.png"/>
                                </div> */}
                                <div>
                                    <img className='rounded' src="./images/tier3.png"/>
                                </div>
                        </Carousel>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <h4 className="text-white">Future Plans</h4>
                        <p className="lead text-grey">

                        <ul>
                              <li>
                              
Have luxurious land in all 50 states that holders may visit and stay at. Land In Arizona will be established before we begin minting for other states.

                               </li>
                               <li>
                              
                               Acquire a Chalet in Switzerland and a Beach house in Puerto Rico which will be exclusive to Raven NFT Holders.

                               </li>
                               <li>
                               Begin curating the model for building, creating, and developing long-term care and rehabilitation facilities throughout the United States for the homeless where residents will have access to full-spectrum medical care, fresh food, water, and sustainable work.


                               </li>
                               <li>
                               Establish These facilities across the United States.

                               </li>
                           </ul>
                        </p>
                    </div>
                </div>
            </div>
		</div>
    }
}
