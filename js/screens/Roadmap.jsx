import React, { Component } from 'react';
import './Roadmap.css';
export default class Roadmap extends Component {
    render() {
        return <div className="section padding-top-bottom-big background-gradient-dark" id="roadmap">
			
			<div className="container">
				<div className="row">

					<div className="rBox col-md-6">
						<img className="roadmap" src="./images/roadmap1.jpg"/>
					</div>

					<div className="rBox col-md-6">
						<img className="roadmap" src="./images/roadmap2.jpg"/>
					</div>

				</div>
				
			</div>

		</div>;
    }
}
