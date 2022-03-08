import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { contractABI, contractAddress, requiredId } from '../other/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header2 from './Header2';
import { getTransactionReceiptMined } from '../other/helper';
toast.configure();

export default class Mint extends Component {
    signer = ""
    prices = [
        1,
        2.5,
        4.5
    ]
    tokenId = 1
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
            price: this.prices[0],
            mintsLeft: 1,
            isUpdate: false,
            validNetwork: true
        }
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
    isMetamaskAvailable() {
        return (typeof window.ethereum !== 'undefined')
    }
    onClick(item) {
        this.tokenId = item
        if (item == 1) {
            this.setState(() => ({
                nft: './images/tier1.png',
                temp: 1,
                b1: this.state.actb,
                b2: this.state.pbtn,
                b3: this.state.pbtn,
                price: this.prices[0]
            }));

        }
        else if (item == 2) {
            this.setState(() => ({
                nft: './images/tier2.png',
                temp: 2,
                b1: this.state.pbtn,
                b2: this.state.actb,
                b3: this.state.pbtn,
                price: this.prices[1]
            }));

        }
        else if (item == 3) {
            this.setState(() => ({
                nft: './images/tier3.png',
                temp: 3,
                b1: this.state.pbtn,
                b2: this.state.pbtn,
                b3: this.state.actb,
                price: this.prices[2]
            }));
        }
        this.updateMintData()
    }

    async connectWallet() {
        if(!this.isMetamaskAvailable()){
            toast.info("Please install metamask wallet")
            return
        }
        try {
            let provider = new ethers.providers.Web3Provider(window.ethereum)
            let address = await provider.send("eth_requestAccounts", []);
            address = address.toString()
            this.signer = provider.getSigner()
            this.setState(() => ({
                isLoading: false,
                walletAddress: address
            }));
            this.updateMintData()
            toast.info("Wallet Connected")
        } catch (e) {
            this.setState(() => ({
                isLoading: false
            }));
        }
    }
    async updateMintData() {
        if(!this.isMetamaskAvailable()){
            return 
        }
        try {
            let id = this.tokenId
            this.setState(() => ({
                isLoading: true,
                isUpdate: true
            }));
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const Signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, contractABI, Signer);
            let maxMint = await contract.maxNormalMint();
            console.log("max" + maxMint)
            let mintCount = await contract.mintCount(id, this.state.walletAddress);
            console.log("mint" + mintCount)
            this.setState(() => ({
                mintsLeft: maxMint - mintCount,
                isLoading: false,
                isUpdate: false
            }));
        } catch (e) {
            console.log(e)
            this.setState(() => ({
                isLoading: false,
                isUpdate: false
            }));
        }
    }
    async mint() {
        if(!this.isMetamaskAvailable()){
            toast.info("Please install metamask wallet")
            return
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const Signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, contractABI, Signer);
        let id = this.state.temp
        let price = this.state.price
        const overrides = {
            value: ethers.utils.parseEther(price.toString()),
            gasLimit: 3000000,
        }
        contract.mint(id, 1, overrides)
            .then(async (success) => {
                toast.info("Mint in progress!")
                let hash = success.hash.toString()
                console.log(hash)
                await this.txnCheck(hash)
                toast.success("Mint Successfull!")
                this.setState(() => ({
                    isLoading: false
                }));
                this.updateMintData()
            }, (error) => {
                console.log(error)
                this.setState(() => ({
                    isLoading: false,
                    mintsLeft: 0
                }));
                toast.error("An Error Occurred")
                this.updateMintData()
            })

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
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    handleClick() {
        this.setState(() => ({
            isLoading: true
        }));
        if (this.state.walletAddress) {
            this.mint()
        }
        else {
            this.connectWallet()
        }

    }
    render() {
        return <div>
            <Header2 />
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
                                    <button className={this.state.b1} onClick={() => { !this.state.isLoading && this.onClick(1); }}>Tier 1</button>
                                    <button className={this.state.b2} onClick={() => { !this.state.isLoading && this.onClick(2); }}>Tier 2</button>
                                    <button className={this.state.b3} onClick={() => { !this.state.isLoading && this.onClick(3); }}>Tier 3</button>
                                </div>
                                <br />
                                <div>
                                    <p style={{ 'color': "yellow" }}> Mint PRICE : {this.state.price} ETH</p>
                                    {this.state.walletAddress && <p style={{ 'color': "yellow" }}> Mints left for wallet : {this.state.mintsLeft}</p>}
                                </div>
                                <br />
                                <div>
                                    <Button
                                        style={{ "fontSize": "20px", "margin": "0px" }}
                                        variant="success"
                                        disabled={!this.state.validNetwork || (this.state.isLoading || this.state.mintsLeft <= 0)}
                                        onClick={!this.state.isLoading ? () => { this.handleClick() } : null}
                                    >
                                        {this.state.isLoading ? (this.state.walletAddress && !this.state.isUpdate ? 'Minting...' : "Loading...") : this.state.walletAddress ? <div>Mint</div> : <div>Connect</div>}
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
