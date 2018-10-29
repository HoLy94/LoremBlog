import React, { Component } from 'react';

class NextSlide extends Component {
    render() {
        const {click} = this.props;

        return (
            <button className="slider_next" onClick={click}><i className="fa fa-long-arrow-right"/></button>
        );
    }
}

export default NextSlide;