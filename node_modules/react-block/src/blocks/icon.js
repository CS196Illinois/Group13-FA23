/**
 * Icon Block
 * @class
 * @author Andrew Wilson 
 */

import React, {Component, PropTypes} from 'react';

export default class Icon extends Component {

	static propTypes = {
    	name: PropTypes.string.isRequired
 	};

 	static propRef = {
 		name : 'string',
 		size: 'number'
 	};


 	static defaultProps = { 
 		src: 'fa-bolt' 
 	};

	/** @constructor */
	constructor(props) {
		super(props);
	}

	/**
	 * Render for Header
	 * @returns {Function}
	 */
	render() {
		var iconClass = "m-t-xl fa " + this.props.name;

		if (this.props.size) {
			iconClass += " fa-"+this.props.size + "x";
		}

		return (
			<p><i style={this.props.styles} className={iconClass}></i></p>
		);
	}
}