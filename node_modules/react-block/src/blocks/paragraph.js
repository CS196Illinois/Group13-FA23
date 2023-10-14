/**
 * Paragraph Block
 * @class
 * @author Andrew Wilson 
 */

import React, {Component, PropTypes} from 'react';

export default class Paragraph extends Component {

	static propTypes = {
    	value: PropTypes.string.isRequired
 	};

 	static defaultProps = { 
 		value: 'enter text...' 
 	};

 	static propRef = {
 		value : 'HTML'
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
		return (
				<p className="edittable" 
				   style={this.props.styles}
				   contentEditable={this.props.editable}>{this.props.value}</p>
		);
	}
}

