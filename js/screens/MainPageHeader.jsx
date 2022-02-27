import { Component } from "react";
import { Link } from "react-router-dom";
export default class MainPageHeader extends Component {
    render() {
        return <div id="menu-wrap" className="menu-back cbp-af-header dark">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-0">
                        <a className="navbar-brand" href=""> <Link to='/'><img src="./text_logo.png" alt="" width="100" height="40"/></Link></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <span className="menu-icon__line menu-icon__line-left"></span>
                                <span className="menu-icon__line"></span>
                                <span className="menu-icon__line menu-icon__line-right"></span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item">
                <Link to='/' ><a className="nav-link" href="#buy" data-ps2id-offset="120">Home</a></Link>
            </li> */}
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none' }} to='/mint'><a className="nav-link" href="#buy" data-ps2id-offset="120">Mint</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none' }} to='/lore'><a className="nav-link" href="#buy" data-ps2id-offset="120">Lore</a></Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none' }} to='/pre'><a className="nav-link" href="#buy" data-ps2id-offset="120">pre-sale</a></Link>
                                </li>
                                {/* <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to='/#roadmap' ><a className="nav-link" href="#buy" data-ps2id-offset="120">Roadmap</a></Link>
            </li> */}
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none' }} to='/rarity'><a className="nav-link" href="#buy" data-ps2id-offset="120">Rarity Checker</a></Link>
                                </li>
                                <li className="nav-link">

                                            <a className="app-btn mx-2 mr-lg-3" target="_blank" href="https://twitter.com/NFTArtBySara"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li className="nav-link">
                                            <a className="app-btn mx-2 mr-lg-3" target="_blank" href="https://discord.gg/CxGHKmdNzs"><i className="fab fa-discord"></i></a>

                                        </li>
                                        <li className="nav-link">
                                            <a className="app-btn mx-2 mr-lg-3" target="_blank" href="https://www.instagram.com/cyber_hero_society/"><i className="fa fa-instagram"></i></a>

                                        </li>
                                {/* <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to='#faq' ><a className="nav-link" href="#buy" data-ps2id-offset="120">Faq</a></Link>
            </li> */}
            {/*
                                            <li className="nav-item mt-2">
                                                <a className="btn btn-primary js-tilt" href="#app" role="button" data-tilt-perspective="300" data-tilt-speed="700" data-tilt-max="24"><span>Connect Wallet</span></a>
                                            </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>;
    }
}
