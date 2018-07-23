import React, {Component} from 'react';
import TeamList from './TeamList';

import about from '../../img/about.jpg';
import './index.css';

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='container about-page'>
                <div className="about-page_title">
                    <h1 className='about-page_title-h1'>Hey <span>there! :)</span></h1>
                    <span className='about-page_title-span'>Here are some words about us</span>
                    <img className='about-page_title-img' src={about} alt="about cat"/>
                    <p className='about-page_title-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                        explicabo fugiat libero vitae! Ab accusantium ad adipisci aliquam amet consequatur deleniti
                        dignissimos doloribus ducimus eligendi est et expedita explicabo iusto, laudantium libero nihil
                        nostrum officiis optio placeat porro quidem sed unde veniam voluptate! Aliquid architecto
                        consequuntur, dicta dolorum et eveniet.</p>
                </div>
                <h1 className='home-page_title'>Our team</h1>
                <TeamList/>
            </div>
        );
    }
}

export default About;