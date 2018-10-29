import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios/index";

import RightBar from '../RightBar';
import TopPanel from './TopPanel';
import Article from './Article';
import ArticlesPagination from './ArticlesPagination';
import ChangeArticle from './ChangeArticle';
import NewArticle from './NewArticle';

import './index.css';
import * as actions from "../../store/actions";

class PostsList extends Component {

    deleteArticle = (article) => {
        const {_delete} = this.props;

        axios.delete(`/articles/${article.id}`)
            .then(response => {
                console.log(response);
                console.log(response.data);
            });
        _delete(article);
    };

    render() {
        const {articles, admin, deleteArticle, takeUpdateArticle, categoryFilter, maxPages, isArticleUpdated, isArticleCreate} = this.props;

        return (
            <section className='container articles'>
                <div className='articles-list'>
                    <TopPanel admin={admin}/>
                    {articles.map(article =>
                        <Article
                            key={article.id}
                            article={article}
                            onDelete={this.deleteArticle}
                            onUpdate={takeUpdateArticle}
                            onFilter={categoryFilter}
                            admin={admin}
                        />
                    )}
                    {maxPages > 1 &&
                    <ArticlesPagination/>
                    }
                </div>
                <RightBar/>
                {isArticleUpdated && <ChangeArticle/>}
                {isArticleCreate && <NewArticle/>}
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        admin: state.isAdmin,
        articles: state.articlesPage,
        isArticleUpdated: state.isArticleUpdated,
        isArticleCreate: state.isArticleCreate,
        maxPages: state.maxPages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        takeUpdateArticle: id => dispatch(actions.takeUpdateArticleAction(id)),
        _delete: id => dispatch(actions.deleteArticleAction(id)),
        categoryFilter: category => dispatch(actions.categoryFilterAction(category)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);