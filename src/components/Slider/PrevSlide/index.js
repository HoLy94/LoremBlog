import React, { Component } from 'react';

class PrevSlide extends Component {
    render() {
        const {click} = this.props;

        return (
            <button className="slider_prev" onClick={click}><i className="fa fa-long-arrow-left"/></button>
        );
    }
}

export default PrevSlide;