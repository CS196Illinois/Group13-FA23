/**
 * Header Block
 * @class
 * @author Andrew Wilson 
 */

import React, {Component, PropTypes} from 'react';

export default class Header extends Component {

	static propRef = {
 		value : 'HTML',
 		size : 'Number'
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
		switch (this.props.size) {
			case 1 : return <h1 className="edittable" style={this.props.styles} contentEditable={this.props.editable}>{this.props.value}</h1>;
			case 2 : return <h2 className="edittable" style={this.props.styles} contentEditable={this.props.editable}>{this.props.value}</h2>;
			case 3 : return <h3 className="edittable" style={this.props.styles} contentEditable={this.props.editable}>{this.props.value}</h3>;
			case 4 : return <h4 className="edittable" style={this.props.styles} contentEditable={this.props.editable}>{this.props.value}</h4>;
			case 5 : return <h5 className="edittable" style={this.props.styles} contentEditable={this.props.editable}>{this.props.value}</h5>;					
			default : return <h1 className="edittable" style={this.props.styles} contentEditable={this.props.editable}>{this.props.value}</h1>;
		}	
	}
}
