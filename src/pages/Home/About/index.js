import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import homeAbout from '../../../img/home-about.jpg';

class About extends Component {

    render() {
        return (
            <section className="home-page_about container">
                <img className='home-page_about-img' src={homeAbout} alt="About us"/>
                <div className="home-page_about-desc">
                    <h1 className='home-page_title'>About</h1>
                    <p className="home-page_about-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti facere perferendis saepe
                        suscipit tempore? Eius minima quia rerum voluptatem! Culpa facilis natus quibusdam quod
                        temporibus!
                    </p>
                    <Link to='/about' className='btn home-page_about-link'>more</Link>
                </div>
            </section>
        );
    }
}


export default About;