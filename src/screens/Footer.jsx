import React, { Component } from 'react';
import './footer.css';
import { discordLink,instaLink,twitterLink } from '../other/links';
export default class Footer extends Component {
    render() {
        return <div>
			<div className="section ">
				<div className="section py-4 background-dark-blue-4">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 footer text-center text-lg-left">
								<p>Copyright © 2022,  <a href="#">Raven NFT</a></p>
							</div>
							<div className="col-lg-6 footer mt-4 mr-auto mt-lg-0 mr-lg-0 text-center text-lg-right">
								<a className="app-btn mx-2 mr-lg-3" target="_blank" href={twitterLink}><i className="fa fa-twitter"></i></a>
								<a className="app-btn mx-2 mr-lg-3" target="_blank" href={discordLink} ><i className="fab fa-discord"></i></a>
								<a className="app-btn mx-2 mr-lg-3" target="_blank" href={instaLink}><i className="fa fa-instagram"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="scroll-to-top">to top</div>
		</div>;
    }
}
