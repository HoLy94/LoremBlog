import React, {Component} from 'react';
import {connect} from "react-redux";

import './index.css';
import PopularList from "./PopularList";
import NewList from "./NewList";

class RightBar extends Component{
    render() {
        return (
            <section className='right-bar'>
                <header className='right-bar_header'>
                    <h2 className='right-bar_title'>Popular on Lorem</h2>
                </header>
                <PopularList articles={this.props.popularArticles}/>
                <header className='right-bar_header'>
                    <h2 className='right-bar_title'>New on Lorem</h2>
                </header>
                <NewList articles={this.props.newArticles}/>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        popularArticles: state.popularArticles,
        newArticles: state.newArticles,
    };
};

export default connect(mapStateToProps, null)(RightBar);