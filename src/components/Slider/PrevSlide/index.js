import React, { Component } from 'react';

class PrevSlide extends Component {
    render() {
        return (
            <button className="slider_prev" onClick={this.props.click}><i className="fa fa-long-arrow-left"/></button>
        );
    }
}

export default PrevSlide;