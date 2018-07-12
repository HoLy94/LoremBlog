import React, {Component} from 'react';
import classNames from 'classnames';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

class ArticlesPagination extends Component {
    handleNext = () => {
        this.props.next();
    };
    handlePrev = () => {
        this.props.prev();
    };
    handleCurrent = (event) => {
        this.props.current(event.target.name)
    };

    render() {
        const pages = [];
        for (let i = 1; i <= this.props.max; i++) {
            pages.push(i);
        }
        return (
            <div className="articles-list_pagination">
                <button
                    className={classNames("btn btn__prev-page",
                        {"btn__disabled": this.props.currentPage <= 1})}
                    disabled={this.props.currentPage <= 1}
                    onClick={this.handlePrev}>
                    <i className="fa fa-angle-double-left"/> prev
                </button>
                <div className='articles-list_pagination-current'>
                    {pages.map(number =>
                        <button className={classNames("btn btn__current-page",{"btn__disabled": this.props.currentPage === number})}
                                name={number}
                                key={number}
                                disabled={this.props.currentPage === number}
                                onClick={this.handleCurrent}>{number}</button>)
                    }
                </div>
                <button
                    className={classNames("btn btn__next-page",
                        {"btn__disabled": this.props.currentPage === this.props.max})}
                    disabled={this.props.currentPage === this.props.max}
                    onClick={this.handleNext}>
                    next <i className="fa fa-angle-double-right"/></button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        max: state.maxPages,
        currentPage: state.currentPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch(actions.nextPageAction()),
        prev: () => dispatch(actions.prevPageAction()),
        current: page => dispatch(actions.currentPageAction(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPagination);