/**
 * Column Block
 * @class
 * @author Andrew Wilson 
 */

import React, {Component, PropTypes} from 'react';

export default class Column extends Component {

	static propRef = {
		grid:'Number'
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
		var className = "col-md-"+this.props.grid;
		return (
			<div className={className} style={this.props.styles}>
				{this.props.children}
			</div>
		);
	}
}

