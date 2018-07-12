import React, { Component } from 'react';

class NextSlide extends Component {
    render() {
        return (
            <button className="slider_next" onClick={this.props.click}><i className="fa fa-long-arrow-right"/></button>
        );
    }
}

export default NextSlide;