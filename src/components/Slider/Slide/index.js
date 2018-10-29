import React, { Component } from 'react';

class Slide extends Component {
    render() {
        const {slide: {img, title}} = this.props;

        return (
            <div className='slider_slide'>
                <img className='slider_slide-img' src={img} alt="Slide"/>
                <h1 className='slider_title'> {title}</h1>
            </div>
        );
    }
}

export default Slide;