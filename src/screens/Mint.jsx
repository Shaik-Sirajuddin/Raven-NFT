import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
export default class Mint extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nft: './images/tier1.png',
            temp: 1,
            actb: 'btn btn-info mt-1',
            pbtn: 'btn btn-secondary mt-1',
            b1: 'btn btn-info mt-1',
            b2: 'btn btn-secondary mt-1',
            b3: 'btn btn-secondary mt-1',
            isLoading: false,
            walletAddress: "",
            price : 1
        }
    }
    onClick(item) {
        if (item == 1) {
            this.setState(() => ({
                nft: './images/tier1.png',
                temp: 1,
                b1: this.state.actb,
                b2: this.state.pbtn,
                b3: this.state.pbtn,
                price : 1
            }));

        }
        else if (item == 2) {
            this.setState(() => ({
                nft: './images/tier2.png',
                temp: 2,
                b1: this.state.pbtn,
                b2: this.state.actb,
                b3: this.state.pbtn,
                price : 2.5
            }));

        }
        else if (item == 3) {
            this.setState(() => ({
                nft: './images/tier3.png',
                temp: 3,
                b1: this.state.pbtn,
                b2: this.state.pbtn,
                b3: this.state.actb,
                price : 4.5
            }));

        }
    }
    async connectWallet() {
        try {
            let provider = new ethers.providers.Web3Provider(window.ethereum)
            let address = await provider.send("eth_requestAccounts", []);
            address = address.toString()
            const signer = provider.getSigner()
            this.setState(() => ({
                isLoading: false,
                walletAddress : address
            }));
        } catch (e) {
            this.setState(() => ({
                isLoading: false
            }));
        }
    }
    mint() {
       
    }
    handleClick() {
        this.setState(() => ({
            isLoading: true
        }));
        if (this.state.walletAddress) {
            this.mint()
            console.log(this.state.isLoading)
        }
        else {
            this.connectWallet()
        }

    }
    render() {
        return <div>
            <Header />
            {/* <div className="section full-height height-auto-lg  hide-over background-dark-blue-3"> */}
            <div className="section full-height height-auto-lg  ">
                <div className="hero-center-wrap relative-on-lg">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-6 mt-5 mt-lg-0 rounded-500">

                                <Carousel
                                    className='my-3 mx-3'
                                    autoPlay={false}
                                    centerMode={false}
                                    infiniteLoop={false}
                                    interval={2000}
                                    swipeable={false}
                                    showThumbs={false}
                                    showStatus={false}
                                    showArrows={false}>
                                    <div >
                                        <img className='rounded' src={this.state.nft} />
                                    </div>
                                </Carousel>
                            </div>
                            <div className="col-lg-6 text-center text-lg-left parallax-fade-top align-self-center z-bigger">
                                <h2 style={{ 'fontFamily': "marvel" }} className="text-white">Connect your wallet and mint</h2>
                                <br />


                                <p className="text-white">Select the NFT you want : </p>
                                <div>
                                    <button className={this.state.b1} onClick={() => { this.onClick(1); }}>Tier 1</button>
                                    <button className={this.state.b2} onClick={() => { this.onClick(2); }}>Tier 2</button>
                                    <button className={this.state.b3} onClick={() => { this.onClick(3); }}>Tier 3</button>
                                </div>
                                <br />
                                <div>
                                  <p style={{'color':"yellow","display":"inline"}}> PRESALE PRICE : </p>
                                  <p style={{'color':"yellow","display":"inline"}}> {this.state.price} ETH</p>
                                </div>
                                <br/>
                                <div>
                                    <Button
                                        style={{ "fontSize": "20px" , "margin":"0px"}}
                                        variant="success"
                                        disabled={this.state.isLoading}
                                        onClick={!this.state.isLoading ? () => { this.handleClick() } : null}
                                    >
                                        {this.state.isLoading ? 'Loading…' : this.state.walletAddress ? <div>Mint</div> : <div>Connect</div>}
                                    </Button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}
