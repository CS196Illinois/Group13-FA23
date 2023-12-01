/**
 * Hero Block
 * @class
 * @author Andrew Wilson 
 */

import React, {Component, PropTypes} from 'react';

export default class Hero extends Component {

	static propRef = {
 		title : 'HTML',
 		subtitle : 'HTML',
 		buttonText: '',
 		buttonLink: ''
 	};


	/** @constructor */
	constructor(props) {
		super(props);
	}

	/**
	 * Render for Header
	 * @returns {Function}
	 */

	 /*
		YouTube video

			<div style={{position: 'fixed', zIndex: -99, width: '100%', height: '100%'}}>
			  <iframe frameborder="0" height="100%" width="100%" 
			    src="https://youtube.com/embed/aLQeqyOK4lE?autoplay=1&controls=0&showinfo=0&autohide=1">
			  </iframe>
			</div>
	 */
	render() {
		return (
			<div className="bg-primary dk" style={this.props.styles}> 
				<div className="text-center wrapper"> 
					<div className="m-t-xl m-b-xl"> 
						<div className="text-uc h1 font-bold inline"> 
							<div className="pull-left m-r-sm text-white">{this.props.title}</div> 
						</div> 
						<div className="h4 text-muted m-t-sm">{this.props.subtitle}</div> 
					</div> 
					<p className="text-center m-b-xl"> 
						<a href={this.props.buttonLink} className="btn btn-lg btn-warning b-white bg-empty m-sm">{this.props.buttonText}</a> 
					</p> 
				</div> 
				<div className="padder"> 
					<div className="hbox"> 
				    </div> 
			    </div> 
		    </div>
		);
	}
}

// export default class HeaderBlock {
	// render() {
		// return <Header />
	// }
// }
