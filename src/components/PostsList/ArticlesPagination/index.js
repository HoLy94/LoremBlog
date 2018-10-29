import React, {Component} from 'react';
import classNames from 'classnames';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

class ArticlesPagination extends Component {
    render() {
        const {currentPage, prev, current, next, max} = this.props;
        const pages = [];

        for (let i = 1; i <= max; i++) {
            pages.push(i);
        }

        return (
            <div className="articles-list_pagination">
                <button
                    className={classNames("btn btn__prev-page",
                        {"btn__disabled": currentPage <= 1})}
                    disabled={currentPage <= 1}
                    onClick={() => prev()}>
                    <i className="fa fa-angle-double-left"/> prev
                </button>
                <div className='articles-list_pagination-current'>
                    {pages.map(number =>
                        <button
                            className={classNames("btn btn__current-page", {"btn__disabled": currentPage === number})}
                            name={number}
                            key={number}
                            disabled={currentPage === number}
                            onClick={event => current(event.target.name)}>{number}</button>)
                    }
                </div>
                <button
                    className={classNames("btn btn__next-page",
                        {"btn__disabled": currentPage === max})}
                    disabled={currentPage === max}
                    onClick={() => next()}>
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