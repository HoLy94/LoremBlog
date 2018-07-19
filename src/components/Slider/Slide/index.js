import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div className='slider_slide'>
                <img className='slider_slide-img' src={this.props.slide.img} alt="Slide"/>
                <h1 className='slider_title'> {this.props.slide.title}</h1>
            </div>
        );
    }
}

export default Slide;