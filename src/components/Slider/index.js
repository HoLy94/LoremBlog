import React, {Component} from 'react';
import Slide from './Slide';
import NextSlide from './NextSlide';
import PrevSlide from './PrevSlide';

import './index.css';
import {slides} from './slides';

class Slider extends Component {
    state = {
        activeSlide: slides[0]
    };
    slide = 0;

    prevSlide = () => {
        this.slide === 0 ? this.slide = slides.length - 1 : this.slide--;
        this.setState({
            activeSlide: slides[this.slide],
        });
    };

    nextSlide = () => {
        this.slide === slides.length - 1 ? this.slide = 0 : this.slide++;
        this.setState({
            activeSlide: slides[this.slide],
        });
    };

    render() {
        const {activeSlide} = this.state;

        return (
            <section className="slider">
                <Slide slide={activeSlide}/>
                <PrevSlide click={this.prevSlide}/>
                <NextSlide click={this.nextSlide}/>
            </section>
        );
    }
}

export default Slider;