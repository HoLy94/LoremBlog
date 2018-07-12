import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios/index";

class Article extends Component {
    handleDelete = () => {
        this.props.onDelete({
            id: this.props.article.id
        });
    };
    handleUpdate = () => {
        document.body.classList.add('modal__open');
        this.props.onUpdate(this.props.article.id);
    };
    handleFilter = (event) => {
        this.props.onFilter(event.target.getAttribute('data-category'))
    };
    handleOpen = () => {
        const article = this.props.article;
        article.views +=1;

        axios.put(`/articles/${article.id}`, article);
    };


    render() {
        const {article} = this.props;
        return (
            <article className='article'>
                <header className='article_header'>
                    <div className="article_img" style={{backgroundImage: `url(${article.img})`}}/>
                    {this.props.admin && <div className="article_change-panel">
                        <button className="article_edit" onClick={this.handleUpdate}><i className="fa fa-edit"/>
                        </button>
                        <button className="article_delete" onClick={this.handleDelete}><i className="fa fa-trash"/>
                        </button>
                    </div>}
                </header>
                <main className="article_content">
                    <Link to={`/post/${article.id}`}><h2
                        className='article_title' onClick={this.handleOpen}>{article.title}</h2></Link>
                    <p className='article_paragraph'>{this.props.article.shortDescription}
                        <Link to={`/post/${this.props.article.id}`} className='article_link' onClick={this.handleOpen}>more
                            <i className="fa fa-angle-double-right"/>
                        </Link>
                    </p>
                    <div className="article_description">
                        <h4 className="article_date"><i className="fa fa-calendar"/> {article.date}</h4>
                        <h4 className="article_views"><i className="fa fa-eye"/> {article.views}</h4>
                        <h4 className='article_author'><i className="fa fa-user"/> {article.author}</h4>
                    </div>
                </main>
                <footer className="article_footer">
                    {article.category.map((category, index) =>
                        <span key={index} className='article_category' onClick={this.handleFilter}
                              data-category={category}>{category}</span>
                    )}
                </footer>
            </article>
        );
    }
}

export default Article;