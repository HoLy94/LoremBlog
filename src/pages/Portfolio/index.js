import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Gallery from '../../components/Gallery/index';

import './index.css';
import * as actions from "../../store/actions";

class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        axios.get('/gallery')
            .then(response => {
                this.props.setGallery(response.data);
            });
    }
    render() {
        return (
            <div className='container portfolio-page'>
                <h1 className='home-page_title'>Gallery</h1>
                <Gallery/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGallery: items => dispatch(actions.setGalleryAction(items)),
    }
};

export default connect(null, mapDispatchToProps)(Portfolio);