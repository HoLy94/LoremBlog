import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div className='slider_slide' style={ { backgroundImage: `url(${this.props.slide.img})` } }>
                <h1 className='slider_title'> {this.props.slide.title}</h1>
            </div>
        );
    }
}

export default Slide;