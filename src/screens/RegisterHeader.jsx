import { Component } from "react";
import { Link } from "react-router-dom";
import { discordLink, twitterLink ,mediumLink , openseaLink , instaLink } from "../other/links";
import './Header.css'
export default class RegisterHeader extends Component {
    render() {
        return <div id="menu-wrap" className="menu-back cbp-af-header dark">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-0">
                            <a className="navbar-brand" href=""> <Link to='/'><h1 className="text-white" style={{ "fontFamily": "Metal Mania" }}>Raven NFT</h1></Link></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                    <span className="menu-icon__line menu-icon__line-left"></span>
                                    <span className="menu-icon__line"></span>
                                    <span className="menu-icon__line menu-icon__line-right"></span>
                                </span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link style={{ textDecoration: 'none' }} to='/'><a className="nav-link" href="#buy" data-ps2id-offset="120">Home</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ textDecoration: 'none' }} to='/mint'><a className="nav-link" href="#buy" data-ps2id-offset="120">Mint</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ textDecoration: 'none' }} to='/presale'><a className="nav-link" href="#buy" data-ps2id-offset="120">Presale</a></Link>
                                    </li>

                                    <li className="nav-link">

                                        <a className="app-btn mx-2 mr-lg-3" target="_blank" href={twitterLink}><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-link">
                                        <a className="app-btn mx-2 mr-lg-3" target="_blank" href={discordLink}><i className="fab fa-discord"></i></a>

                                    </li>
                                    <li className="nav-link">
                                        <a className="app-btn mx-2 mr-lg-3" target="_blank" href={instaLink}><i className="fa fa-instagram"></i></a>

                                    </li>
                                    <li className="nav-link">
                                        <a className="app-btn mx-2 mr-lg-3" target="_blank" href={mediumLink}><i className="fa fa-medium"></i></a>
                                    </li>
                                    <li className="nav-link">
                                        <a className="app-btn mx-2 mr-lg-3" target="_blank" href={openseaLink}><i className="fa fa-opensea"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    }
}
