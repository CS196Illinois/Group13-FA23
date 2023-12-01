/**
 * Image Block
 * @class
 * @author Andrew Wilson 
 */

import React, {Component, PropTypes} from 'react';

export default class Image extends Component {

	static propTypes = {
    	src: PropTypes.string.isRequired
 	};

 	 static propRef = {
 		src : 'URL'
 	};


 	static defaultProps = { 
 		src: 'http://www.engraversnetwork.com/files/placeholder.jpg' 
 	};

	/** @constructor */
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			active: false
		}
	}

	/**
	 * Render for Header
	 * @returns {Function}
	 */
	render() {
		return (
			<img style={this.props.styles} src={this.props.src} />
		);
	}
}

