/**
 * Container Block
 * @class
 * @author Andrew Wilson 
 */

import React, {Component, PropTypes} from 'react';

export default class Container extends Component {

	static propRef = {
 		align : 'string',
 		fluid : 'container-fluid'
 	};


	static propTypes = {
 	};

 	static defaultProps = { 
 	};

	/** @constructor */
	constructor(props) {
		super(props);
	}


	componentWillMount() {
		//
	}

	/**
	 * Render for Header
	 * @returns {Function}
	 */
	render() {
		var className =  this.props.fluid + ' ';

		if (this.props.align) {
			className += this.props.align
		}

		return (
			<div className={className} style={this.props.styles}>
				{this.props.children}
			</div>
		);
	}
}

