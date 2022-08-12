import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from './Header';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { contractABI, contractAddress, requiredId } from '../other/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './banner';
import Footer from './Footer';
toast.configure();

export default class Presale extends Component {

    signer = ""
    prices = [
        0.75,
        2,
        4
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
            isPresaleUser: false,
            validNetwork: true
        }


    }
    isMetamaskAvailable() {
        return (typeof window.ethereum !== 'undefined')
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

    async connectWallet(clicked) {
        if (!this.isMetamaskAvailable()) {
            if (clicked)
                toast.info("Please install metamask wallet")
            return
        }
        try {
            let provider = new ethers.providers.Web3Provider(window.ethereum,"any")
            provider.on("network", (newNetwork, oldNetwork) => {
                this.setState(() => ({
                    validNetwork: newNetwork.chainId === requiredId
                }));
            });
            let address = await provider.send("eth_requestAccounts", []);
            address = address.toString()
            this.signer = provider.getSigner()
            this.setState(() => ({
                isLoading: false,
                walletAddress: address
            }));
            this.updateMintData()
            this.checkPresale()
            if (clicked)
                toast.info("Wallet Connected")
        } catch (e) {
            this.setState(() => ({
                isLoading: false
            }));
        }
    }
    async updateMintData() {
        if (!this.isMetamaskAvailable()) {
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
        if (!this.isMetamaskAvailable()) {

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
    async checkPresale() {
        if (!this.isMetamaskAvailable()) {
            return
        }
        this.setState(() => ({
            isPresaleUser: false
        }));
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const Signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, contractABI, Signer);
            let address = this.state.walletAddress
            if (!address) return
            let isEligible = await contract.presaleWallets(address)
            console.log(isEligible)
            this.setState(() => ({
                isLoading: false,
                isPresaleUser: isEligible
            }));
            if (isEligible) {
                toast.success("Wow! Your wallet is whitelisted for presale")
            }
            else {
                toast.info("Your wallet is not whitelisted for presale")
            }
        } catch (e) {
            console.log(e)
            this.setState(() => ({
                isLoading: false,
                isPresaleUser: false
            }));
            toast.info("Your wallet is not whitelisted for presale")
        }
    }
    handleClick() {
        this.setState(() => ({
            isLoading: true
        }));
        if(!this.state.validNetwork){
            toast.info("Wrong network detected! Please switch your network to  Eth mainnet")
            this.connectWallet(true)
            return 
        }
        if (this.state.walletAddress) {
            this.mint()
        }
        else {
            this.connectWallet(true)
        }
    }
    componentDidMount() {
        this.connectWallet(false)
    }
    render() {
        return <div>
            <Banner />
            <Header />
            {/* <div className="section full-height height-auto-lg  hide-over background-dark-blue-3"> */}
            <div className="section full-height height-auto-lg  " id='presale'>
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
                            <div className="col-lg-6 text-center text-lg-left align-self-center z-bigger">
                                <h2 className="text-white" style={{ "fontSize": "50px" }}>Connect your wallet and mint</h2>
                                <br />


                                <p className="text-white">Select the NFT you want : </p>
                                <div>
                                    <button className={this.state.b1} onClick={() => { !this.state.isLoading && this.onClick(1); }}>Tier 1</button>
                                    <button className={this.state.b2} onClick={() => { !this.state.isLoading && this.onClick(2); }}>Tier 2</button>
                                    <button className={this.state.b3} onClick={() => { !this.state.isLoading && this.onClick(3); }}>Tier 3</button>
                                </div>
                                <br />
                                <div>
                                    <p style={{ 'color': "yellow" }}> PRESALE PRICE : {this.state.price} ETH</p>
                                    {this.state.walletAddress && <p style={{ 'color': "yellow" }}>Presale Mints left for wallet : {this.state.mintsLeft}</p>}
                                </div>
                                <br />
                                <div>
                                    <Button
                                        style={{ "fontSize": "20px", "margin": "0px" }}
                                        variant="success"
                                        disabled={(this.state.isLoading || this.state.mintsLeft <= 0)  || (this.state.walletAddress && !this.state.isPresaleUser) }
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
            <Footer />
        </div>
    }
}
