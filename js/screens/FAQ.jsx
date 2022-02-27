import React, { Component } from 'react';
export default class FAQ extends Component {
    render() {
        return <div className="section padding-top-bottom-big  background-gradient-dark" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap text-center">
                            <div className="back-title">faq</div>
                            <h3 className="text-white">Questions and Answers</h3>
                            <p className="color-pr">Listed questions and answers, all supposed to be commonly asked in some context, and pertaining to a particular topic.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div id="accordion" className="accordion-style">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <a className="text-white background-dark-blue-2" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is an NFT
                                    </a>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <h6 className="text-white">What is an NFT</h6>
                                        <p className="text-grey">
                                            They are one of a kind digital items that users can buy, own, and trade. Some NFTs only purpose is to exist as artwork. Some offer additional utility like games, metaverse access, entry to gated sections of websites, or participation in an event.
                                        </p>
                                    </div>
                                </div>
                            </div>

                          

                           
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div id="accordion-snd" className="accordion-style">
                        <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <a className="collapsed text-white background-dark-blue-2" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is Phantom
                                    </a>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        <h6 className="text-white">What is Phantom</h6>
                                        <p className="text-grey">
                                        Phantom is a safe Cryptocurrency wallet where you can store Cryptocurrency and NFTs. It is required to purchase and mint your NFT. Download <a href="https://phantom.app/" target="_blank">here</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
