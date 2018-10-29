import React, {Component} from 'react';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

class TopPanel extends Component {
    handleNewArticle = () => {
        const {newArticle} = this.props;

        document.body.classList.add('modal__open');
        newArticle();
    };

    render() {
        const {category, cancelCategoryFilter, admin, dateSort, viewsSort, changeLimit} = this.props;

        return (
            <header className="articles-list_header">
                <h2 className='articles-list_title'>Blog</h2>
                <div className="articles-list_filter">
                    {category &&
                    <button
                        className="articles-list_filter-category"
                        onClick={() => cancelCategoryFilter()}>
                        {category} <i className="fa fa-times-circle"/>
                    </button>}
                    {admin &&
                    <button className="articles-list_new-article-btn" onClick={this.handleNewArticle}>
                        <i className="fa fa-plus"/>
                    </button>}
                    <button className="articles-list_new-article-btn" onClick={() => dateSort()}>
                        <i className="fa fa-calendar"/>
                    </button>
                    <button className="articles-list_new-article-btn" onClick={() => viewsSort()}>
                        <i className="fa fa-eye"/>
                    </button>
                    <select className='articles-list_filter-select' value={this.props.limit}
                            onChange={event => changeLimit(event.target.value)}>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                        <option value="18">24</option>
                    </select>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.filteredCategory,
        limit: state.limit,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        newArticle: () => dispatch(actions.newArticleAction()),
        changeLimit: (limit) => dispatch(actions.changeLimitAction(limit)),
        cancelCategoryFilter: () => dispatch(actions.cancelCategoryFilterAction()),
        viewsSort: () => dispatch(actions.sortByViewsAction()),
        dateSort: () => dispatch(actions.sortByDateAction()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel);