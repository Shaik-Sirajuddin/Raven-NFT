import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import 'react-status-alert/dist/status-alert.css';
import Footer from './Footer';
import '../App.css';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { contractABI, contractAddress, requiredId } from '../other/config';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterHeader from './RegisterHeader';

toast.configure();
const moment = require('moment');
const requiredCode = 2090
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            validNetwork: true,
            code: '',
            walletAddress: '',
            alertId: StatusAlertService.showSuccess('Default success alert!')
        };
        if (this.isMetamaskAvailable()) {
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            provider.on("network", (newNetwork, oldNetwork) => {
                this.setState(() => ({
                    validNetwork: newNetwork.chainId === requiredId
                }));
                if (newNetwork.chainId != requiredId) {
                    toast.info("Wrong network detected! Please switch your network to  Eth mainnet")
                }
            });
        }
    }


    async scroll() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    txnCheck = async (txnHash) => {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const Signer = provider.getSigner()
        let txn_test = await provider.getTransaction(txnHash);
        if (txn_test) {
            if (txn_test.blockNumber) {
                console.log("txn_test: ");
                console.log(txn_test);
                return txn_test
            }
            else {
                await this.sleep(500)
                await this.txnCheck(txnHash)
            }
        }
    }
    isMetamaskAvailable() {
        return (typeof window.ethereum !== 'undefined')
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async savePresale() {
        if(!this.isMetamaskAvailable()){
            toast.info("Please install metamask wallet")
            return
        }
        try {
            let { code, walletAddress } = this.state;
            walletAddress = walletAddress.trim()
            if (code != requiredCode) {
                toast.error("Wrong code entered");
                return;
            }
            if (!walletAddress) {
                toast.error('Invalid Wallet Address');
                return;
            }
            this.setState(() => ({
                loading: true
            }));

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const Signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, contractABI, Signer);
            let result = await contract.addPresaleUser(code, walletAddress)
                .then(async (success) => {
                    toast.info("Registration in progress!")
                    let hash = success.hash.toString()
                    console.log(hash)
                    await this.txnCheck(hash)
                    toast.success("You have successfully registered for presale.")
                    this.setState(() => ({
                        loading: false
                    }));
                }, (error) => {
                    console.log(error)
                    this.setState(() => ({
                        loading: false
                    }));
                    toast.error("An Error Occurred")

                })
            console.log(result);

            this.setState({
                email: '',
                walletAddress: '',
            });
        }
        catch (error) {
            console.log('savePresale', error);
            toast.error('An Error Occurred');
            this.scroll();
        }
    }
    render() {

        const { email, walletAddress } = this.state;
        return (<div>

            <RegisterHeader />
            <div className="section full-height height-auto-lg hide-over background-dark-blue-3 ">
                <div className="hero-center-wrap relative-on-lg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center text-lg-left parallax-fade-top align-self-center z-bigger">

                                <br />

                                <div className="">
                                    <h2 className="text-white">Reserve Your Spot Now!</h2>


                                    <input className="form-control text-left mt-2" placeholder="Enter the code" value={this.state.code} onChange={e => {
                                        this.setState({
                                            code: e.target.value
                                        });
                                    }} type="text" />
                                    <input className="form-control text-left mt-2" placeholder="Enter your wallet address" value={walletAddress} onChange={e => {
                                        this.setState({
                                            walletAddress: e.target.value
                                        });
                                    }} type="text" />

                                    <div>
                                        <Button
                                            style={{ "fontSize": "16px", "marginTop": "20px" }}
                                            variant="success"
                                            disabled={!this.state.validNetwork || (this.state.loading)}
                                            onClick={!this.state.loading ? () => { this.savePresale() } : null}
                                        >
                                            {this.state.loading ? "Loading..." : "Register"}
                                        </Button>

                                    </div>
                                </div>

                                <p className="text-left text-white mb-0"><small></small></p>
                            </div>
                            <div className="col-lg-6 mt-5 mt-lg-0 rounded-500">

                                <Carousel className='my-3 mx-3' autoPlay={true} centerMode={false} infiniteLoop={true} interval={2000} swipeable={false} showThumbs={false} showStatus={false} showArrows={false}>
                                    <div>
                                        <img className='rounded' src="./images/tier1.png" />
                                    </div>

                                    <div>
                                        <img className='rounded' src="./images/tier2.png" />
                                    </div>
                                    <div>
                                        <img className='rounded' src="./images/tier3.png" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <StatusAlert />

            </div>

            <Footer></Footer>
        </div>);
    }
}
